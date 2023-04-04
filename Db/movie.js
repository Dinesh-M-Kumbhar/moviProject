const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
    movie_title: String,
    poster_src: String,
    movie_text: String,
    ticket_price: String,
    theater_city: String
})
module.exports = mongoose.model("movie", moviesSchema)