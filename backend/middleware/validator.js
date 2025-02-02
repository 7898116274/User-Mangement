const { body } = require("express-validator");

exports.validateUser = [
  body("user").notEmpty().withMessage("User name is required"),
  body("interest").isArray().withMessage("Interest must be an array of strings"),
  body("age").isInt({ min: 1 }).withMessage("Age must be a positive number"),
  body("mobile")
    .isNumeric().withMessage("Mobile must be a number")
    .isLength({ min: 10, max: 10 }).withMessage("Mobile number must be 10 digits"),
  body("email").isEmail().withMessage("Invalid email format"),
];
    