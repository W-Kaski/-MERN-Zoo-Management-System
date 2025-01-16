const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ID: {
        type: Number,
        required: true
    },
    speciesName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'species',
        required: true,
    },
    zoo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin',
        required: true,
    },
});

module.exports = mongoose.model("animal", animalSchema);