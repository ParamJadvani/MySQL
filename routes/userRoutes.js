const express = require("express");
const userRoutes = express.Router();
const userMiddleware = require("../middlewares/userMiddleware");
const userController = require("../controllers/userController");

userRoutes.get("/", userController.getAllUsers);

userRoutes.post(
  "/register",
  userMiddleware.isValidField,
  userController.createUser
);
userRoutes.post(
  "/login",
  userMiddleware.isValidField,
  userController.loginUser
);

module.exports = userRoutes;
