const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a name"],
        },
        email: {
            type: String,
            required: [true, "Please add a email"],
            unique: true,
            trim: true,
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Please enter a valid email",
            ],
        },
        password: {
            type: String,
            required: [true, "Please add a password"],
            minLength: [6, "Password must be up to 6 caracteres"],
            maxLength: [16, "Password must not be more than 32 caracteres"],
        },
        photo: {
            type: String,
            required: [true, "Please add a photo"],
            default: "https://unsplash.com/photos/OKeu92CvolE",
        },
        phone: {
            type: String,
            default: "+972",
        },
        bio: {
            type: String,
            maxLength: [250, "Bio must not be more than 350 caracteres"],
            default: "bio",
        },
    },
    {
        timestamp: true,
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
