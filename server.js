const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectToDataBase = require("./database/mongoose.database");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

connectToDataBase();
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});
