const mongoose = require("mongoose");

const venueSchema = new mongoose.Schema({
    venueName: {
        type: String,
        required: true,
    },
    venueCode: {
        type: String,
        required: true,
    },
    speciesName: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'species',
        required: true,
    }],
    zoo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin'
    },
    zookeepers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'zookeeper',
    }]
}, { timestamps: true });

module.exports = mongoose.model("venue", venueSchema);