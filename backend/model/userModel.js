const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        trim: true
    },
    interest: {
        type: [String],
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 1
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[0-9]{10}$/.test(v.toString());
            },
            message: props => `${props.value} is not a valid 10-digit mobile number!`
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
    }

}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
