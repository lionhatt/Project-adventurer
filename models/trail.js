const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trailSchema = new Schema({
    image: {type: String, required: true},
    name: {type: String, required: true},
    location: {type: String, required: true},
    address: {type: String, required: true},
    intro: {type: String, required: true},
    discription: {type: String, required: true},
    difficulty: {type: String, required: true},
    length: {type: Number, required: true},
    elevation: {type: Number, required: true},
    route: {type: String, required: true},
});

const Trail = mongoose.model("Trail", trailSchema);

module.exports = Trail;