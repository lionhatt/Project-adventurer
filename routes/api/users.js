const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
.post(usersController.create)

router.route("/:id")
.get(usersController.findOne)
.put(usersController.update)

module.exports = router;