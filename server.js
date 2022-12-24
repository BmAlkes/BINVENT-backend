const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const errorHandler = require("./middleWare/errorMiddleware");
const cookieParser = require("cookie-parser");

const connectToDataBase = require("./database/mongoose.database");

const app = express();
app.use(cors());

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes Middleware

app.use("/api/user", userRoute);
app.use("/api/products", productRoute);

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
