const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
.get(usersController.findAll)
.post(usersController.create)

// router.route("/:username")
// .get(usersController.findOne)

router.route("/:id")
.get(usersController.findOne)
.put(usersController.update)

module.exports = router;