const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const contactRoute = require("./routes/contactRoute.js");
const errorHandler = require("./middleWare/errorMiddleware");
const cookieParser = require("cookie-parser");
const path = require("path");

const connectToDataBase = require("./database/mongoose.database");

const app = express();
app.use(
    cors({
        origin: ["http://localhost:3000", "https://binvent.vercel.app"],
        credentials: true,
    })
);

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Routes Middleware

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/contactus", contactRoute);

// routes
app.get("/", (req, res) => {
    res.send("Home Page");
});

const PORT = process.env.PORT || 5000;

//Error middleware
app.use(errorHandler);

connectToDataBase();
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});
