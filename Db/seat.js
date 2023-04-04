const mongoose = require("mongoose")

const seatSchema = new mongoose.Schema ({
    diplaedSeats: Array
})
module.exports = mongoose.model("seat", seatSchema)