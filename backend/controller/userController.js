const User = require("../model/userModel");
const { validationResult } = require("express-validator");

// Create a new user with validation
const createUser = async (req, res) => {
    try {
      // Validate input
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { user, interest, age, mobile, email } = req.body;
      const newUser = new User({ user, interest, age, mobile, email });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  };
  

// Get all users 
const getUsers = async (req, res) => {
  try {
    const { search, page = 1, limit = 10 } = req.query;

    let query = { deleted: false };

    if (search) {
      query.$or = [
        { user: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } }
      ];
    }

    const users = await User.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id});
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};


// Update user details
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.id},
      req.body,
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//  delete a user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {createUser ,updateUser ,getUserById,getUsers,deleteUser}
