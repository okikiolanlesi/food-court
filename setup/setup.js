const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const Brand = require("../models/brandModel");
const User = require("../models/userModel");

const setUp = async () => {
  console.log("setup started");
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(process.env.MONGO_DATABASE_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
  await User.deleteMany();
  await Brand.deleteMany();

  await User.create({
    first_name: "admin",
    last_name: "admin",
    email: "admin@gmail.com",
    password: "password",
    passwordConfirm: "password",
    role: "admin",
  });
  await User.create({
    first_name: "user",
    last_name: "user",
    email: "user@gmail.com",
    password: "password",
    passwordConfirm: "password",
    role: "user",
  });

  console.log({
    message: "Two users created successfully",
    userInfo: [
      {
        first_name: "admin",
        last_name: "admin",
        email: "admin@gmail.com",
        password: "password",
        passwordConfirm: "password",
        role: "admin",
      },
      {
        first_name: "user",
        last_name: "user",
        email: "user@gmail.com",
        password: "password",
        passwordConfirm: "password",
        role: "user",
      },
    ],
  });

  const brand1 = await Brand.create({
    name: "Tantalizer",
  });
  const brand2 = await Brand.create({
    name: "Portofino",
  });

  console.log({
    message: "Two brands created successfully",
    brandInfo: [brand1, brand2],
  });
  console.log("setup complete");
};

setUp();
