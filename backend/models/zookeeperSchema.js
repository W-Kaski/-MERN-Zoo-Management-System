const mongoose = require("mongoose")

const zookeeperSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ID: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "Zookeeper"
    },
    zoo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin',
        required: true,
    },
    venue: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subject',
    },
    species: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sclass',
        required: true,
    },
    attendance: [{
        date: {
            type: Date,
            required: true
        },
        presentCount: {
            type: String,
        },
        absentCount: {
            type: String,
        }
    }],
    warnings: [{
        date: {
            type: Date,
            required: true
        },
        count: {
            type: String,
        }
    }]
}, { timestamps: true });

module.exports = mongoose.model("zookeeper", zookeeperSchema)