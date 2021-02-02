const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trailSchema = new Schema({
    image: {type: String, required: true},
    name: {type: String, required: true},
    location: {type: String, required: true},
    address: {type: String, required: true},
    intro: {type: String, required: true},
    discription: {type: String},
    difficulty: {type: String, required: true},
    length: {type: Number, required: true},
    elevation: {type: Number, required: true},
    duration: {type: String, required: true},
    route: {type: String, required: true},
    adventures: [
        {
            type: Schema.Types.ObjectId,
            ref: "Adventure"
        }
    ]
});

const Trail = mongoose.model("Trail", trailSchema);

module.exports = Trail;