const { STRING, NUMBER } = require("sequelize");
const db = require("../config/db");
const { ulid } = require("ulid");
const User = require("./user.model");

const Product = db.define("Product", {
  id: {
    type: STRING,
    primaryKey: true,
    defaultValue: () => ulid(),
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  price: {
    type: NUMBER,
    allowNull: false,
  },
  img: {
    type: STRING,
    allowNull: false,
  },
  userId:{type:STRING}
});
User.hasMany(Product);
Product.belongsTo(User);

module.exports = Product
