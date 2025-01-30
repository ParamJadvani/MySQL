exports.isValidField = (req, res, next) => {
  const { email, password, username } = req.body;

  if (req.path === "/login" && (!email || !password)) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }

  if (req.path !== "/login" && (!email || !password || !username)) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }

  next();
};
