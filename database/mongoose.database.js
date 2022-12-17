const mongoose = require("mongoose");

const connectToDataBase = async () => {
  await mongoose.connect(
    `mongodb+srv://bmalkes:${process.env.DB_PASSWORD}@bmalkes.9s78unx.mongodb.net/?retryWrites=true&w=majority`
  );
};

module.exports = connectToDataBase;
