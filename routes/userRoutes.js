const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
// const {
//   validateCreateUser,
//   //   validateUpdateUser,
//   //   validateChangePassword,
//   validateLogin,
// } = require("../validators/users.validator");

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);

router.route("/").get(userController.getAllUsers);
router.route("/:id").get(userController.getUser);
module.exports = router;
