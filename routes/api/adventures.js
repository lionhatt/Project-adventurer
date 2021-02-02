const router = require("express").Router();
const adventuresController = require("../../controllers/adventuresController");

// Matches with "/api/trails"
router
  .route("/")
  .get(adventuresController.findAll)
  .post(adventuresController.create);

// Matches with "/api/trials/:id"
router
  .route("/:id")
  .get(adventuresController.findById)
  .put(adventuresController.update)
  .delete(adventuresController.remove);

router
  .route("/adduser/:id")
  .put(adventuresController.addUserToAdventure);

  module.exports = router;