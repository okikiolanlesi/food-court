const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_DATABASE_URI)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("Error connecting to database", err);
    });
};

module.exports = connectToDb;
