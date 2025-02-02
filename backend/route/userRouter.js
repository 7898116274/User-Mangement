const express = require("express");

const userrouter = express.Router();

const { getUsers, getUserById, createUser, updateUser, deleteUser } = require("../controller/userController");

const {validateUser} = require("../middleware/validator")


userrouter.post("/", validateUser,createUser);

userrouter.get("/", getUsers);
userrouter.get("/:id", getUserById);

userrouter.put("/:id", validateUser,updateUser);

userrouter.delete("/:id", deleteUser);

module.exports = userrouter;
