const router = require("express").Router();
const trailsController = require("../../controllers/trailsController");

// Matches with "/api/trails"
router
  .route("/")
  .get(trailsController.findAll)
  .post(trailsController.create);

// Matches with "/api/trials/:id"
router
  .route("/:id")
  .get(trailsController.findById)
  .put(trailsController.update)
  .delete(trailsController.remove);

router
  .route("/addadventure/:id")
  .put(trailsController.addAdventureToTrail);

  module.exports = router;