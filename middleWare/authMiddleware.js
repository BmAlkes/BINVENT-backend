const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.status(401);
            throw new Error("Not authorized, please login");
        }
        //Verify Token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        //Get user Id from token
        const user = await User.findById(verified.id).select("-password");

        if (!user) {
            res.status(401);
            throw new Error("User not found");
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(401);
        throw new Error("Not authorized, please login");
    }
});

module.exports = protect;
