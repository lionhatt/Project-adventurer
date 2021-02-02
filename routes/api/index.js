const router = require("express").Router();
const userRoutes = require('./users');
const trailRoutes = require('./trails');
const adventureRoutes = require('./adventures')

//User routes
router.use('/users', userRoutes);
router.use('/trails', trailRoutes);
router.use('./adventures', adventureRoutes)

module.exports = router