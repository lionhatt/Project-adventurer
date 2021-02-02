const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
.get(usersController.findAll)
.post(usersController.create);

router.route("/:id")
.get(usersController.findById)
.put(usersController.update);

router.route("/addadventure/:id")
.put(usersController.addAdventureToUser)

router.route("/username/:id")
.get(usersController.findOne);

module.exports = router;