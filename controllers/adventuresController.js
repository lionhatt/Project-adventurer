const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Adventure.find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Adventure.findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    create: function (req, res) {
        db.Adventure.create(req, res)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addUserToAdventure: function (req, res) {
        db.Adventure.findByIdAndUpdate(
            req.params.id, {$push: {users: req.body.data._id}},
            { new: true, useFindAndModify: false }
        )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Adventure.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Adventure.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};