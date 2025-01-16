const mongoose = require("mongoose");

const speciesSchema = new mongoose.Schema({
    speciesName: {
        type: String,
        required: true,
    },
    zoo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin'
    },
    animals :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'animal'
    }]
}, { timestamps: true });

module.exports = mongoose.model("species", speciesSchema);

