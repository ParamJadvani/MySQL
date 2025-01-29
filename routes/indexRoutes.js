const routes = require('express').Router();
const userRoutes = require('./userRoutes')

routes.get('/users',userRoutes);

module.exports = routes;