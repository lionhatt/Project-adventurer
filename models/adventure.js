const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adventureSchema = new Schema({
    starttime: { type: String, required: true },
    endtime: { type: String, required: true },
    startlocation: { type: String, required: true },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

const Adventure = mongoose.model("Adventure", adventureSchema);

module.exports = Adventure;