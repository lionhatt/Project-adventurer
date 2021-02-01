const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adventureSchema = new Schema({
    startTime: {type: String, required: true},
    endTime: {type: String, required: true},
    users: [
        {
            type: Schema.Types.Objectid,
            ref: "User"
        }
    ]
});

const Adventure = mongoose.model("Adventure", adventureSchema);

module.exports = Adventure;