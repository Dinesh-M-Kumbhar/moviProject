const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
    // _id:String,
    username:String,
    useremail:String,
    date:String,
    time:String,
    theater:String,
    ticketcount:String,
    movietitle:String,
    amount:String

})

module.exports = mongoose.model("ticketrecodrs",recordSchema)