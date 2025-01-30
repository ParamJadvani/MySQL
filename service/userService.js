const userRepository = require("../repository/userRepository");
const helper = require("../utils/helper");

exports.register = async ({ username, email, password }) => {
  if (await userRepository.checkEmailAvailability(email)) {
    throw new Error("Email already exists");
  }
  const hashPassword = await helper.hashedPassword(password);
  const user = await userRepository.createUser({
    username,
    email,
    password: hashPassword,
  });

  let token = await helper.generateToken(user);

  return { user, token };
};

exports.login = async ({ email, password }) => {
  if (!(await userRepository.checkEmailAvailability(email))) {
    throw new Error("Email does not exist");
  }
  const user = await userRepository.getUserByEmail(email);
  
  if (!(await helper.compare(password,user.password))) {
    throw new Error("Invalid Password");
  }

  let token = await helper.generateToken(user);

  return { user, token };
};
