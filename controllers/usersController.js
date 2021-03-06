const db = require('../models');

// Defining methods for the usersController
module.exports = {
    findAll: function(req, res) {
        db.User
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function (req, res) {
        db.User
            .findOne({ username: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addAdventureToUser: function (req, res) {
        db.User.findByIdAndUpdate(
            req.params.id, {$push: {advantures: req.body.data._id}},
            { new: true, useFindAndModify: false }
        )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
}
