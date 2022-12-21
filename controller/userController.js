const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    //Validation
    if (!name || !email || !password) {
        res.status(404);
        throw new Error("Please fill in all required fields");
    }
    if (password.length < 6) {
        res.status(400);
        throw new Error("Password must be up to 6 characters");
    }

    // check if email already exists

    const userExists = await User.findOne({ email: email });
    if (userExists) {
        res.status(400);
        throw new Error("Email has  already been registered");
    }
    // create a user

    const user = await User.create({
        name,
        password,
        email,
    });
    if (user) {
        const { _id, name, email, photo, phone, bio } = user;
        res.status(201).json({
            _id,
            name,
            email,
            photo,
            phone,
            bio,
        });
    } else {
        res.status(400);
        throw new Error("Invalid user Data");
    }
});

module.exports = { registerUser };
