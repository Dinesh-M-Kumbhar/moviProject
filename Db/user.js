const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname:String,
    email:String,
    password:String,
    address:String,
    city:String
})

module.exports = mongoose.model("userdata",userSchema);