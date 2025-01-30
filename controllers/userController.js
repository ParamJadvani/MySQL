const userService = require("../service/userService");
const userRepository = require("../repository/userRepository");
const User = require("../models/user.model");

exports.getAllUsers = async (req, res) => {
  try {
    let users = await userRepository.getAllUsers();
    return res.json(users);
  } catch (error) {
    return res.send({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    let user = await userService.register({
      username,
      email,
      password,
    });
    return res.status(201).json(user);
  } catch (error) {
    return res.send({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await userService.login({ email, password });
    return res.status(200).json(user);
  } catch (error) {
    return res.send({ message: error.message });
  }
};
