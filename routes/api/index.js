const router = require("express").Router();
const userRoutes = require('./users');

//User routes
router.user('/users', userRoutes);

module.exports = router