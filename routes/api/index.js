const router = require("express").Router();
const userRoutes = require('./users');
const trailRoutes = require('./trails')

//User routes
router.use('/users', userRoutes);
router.use('/trails', trailRoutes)

module.exports = router