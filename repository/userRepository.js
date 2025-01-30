const User = require("../models/user.model");

exports.getAllUsers = async () => {
  const user = await User.findAll();
  return user;
};

exports.createUser = async (data) => {
  const user = await User.create(data);
  return user;
};

exports.updateUser = async (id, data) => {
  const user = await User.findByPk(id);
  if (!user) return false;
  await user.update(data);
  return true;
};

exports.deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return false;
  await user.destroy();
  return true;
};

exports.getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

exports.getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

exports.checkEmailAvailability = async (email) => {
  const user = await User.findOne({ where: { email } });
  return !!user;
};
