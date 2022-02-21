// Iteration #1

const mongoose = require("mongoose")

const dronSchema = new mongoose.Schema ({
    name: {
        type: String
    },
    propellers: {
        type: Number
    },
    maxSpeed: {
        type: Number
    }
})

const Drones = mongoose.model("Drones", dronSchema)

module.exports = Drones