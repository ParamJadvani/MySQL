const Product = require("../models/product.model");
const User = require("../models/user.model");

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const product = await Product.create(req.body);
    res.send(product);
  } catch (error) {
    res.send(error.message);
  }
};

exports.getAll = async (req, res) => {
  const product = await Product.findAll({
    include: User,
  });
  res.send(product);
};
