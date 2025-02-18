const routes = require("express").Router();
const productRoutes = require("./productRoutes");
const userRoutes = require("./userRoutes");


routes.use("/users", userRoutes);
routes.use('/product',productRoutes)

module.exports = routes;
