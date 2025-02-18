const express = require("express");
const productController = require("../controllers/productController");
const productRoutes = express.Router();

productRoutes.get("/", productController.getAll);
productRoutes.post("/", productController.create);

module.exports = productRoutes;
