const { Sequelize } = require("sequelize");

const db = new Sequelize("db","root","12345",{
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
