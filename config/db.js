const { Sequelize } = require("sequelize");

const db = new Sequelize({
  host: "localhost",
  dialect: "mysql",
  username: "root",
  password: "12345",
  database: "db",
});

module.exports = db;
