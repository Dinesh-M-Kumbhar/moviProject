const express = require("express");
require("./Db/config");

const Jwt = require("jsonwebtoken");
const JwtKey = "d-movie"

const User = require("./Db/user")
const Movie = require("./Db/movie")
const Admin = require("./Db/admin")
const cors = require("cors");
const Ticketrecodrs = require("./Db/ticketRecord")
const Seat = require("./Db/seat")
// const movie = require("./Db/movie");

const app = express();
app.use(express.json());
app.use(cors())
//   To send sign-up/user  data to database 
app.post("/m-signup", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject()
    delete result.password
    res.send(result)
})


// To send and authanticate login data from database 
app.post("/m-login", async (req, res) => {
    let user = await User.findOne(req.body).select("-password")
    if (req.body.password && req.body.email) {
        if (user) {
            Jwt.sign({ user }, JwtKey, {expiresIn:"2h"}, (err, token) => {
                if (err) {
                    res.send(`something went wrong try after sometime `)
                }
                res.send({ user, auth: token })
            })
        } else {
            res.send({ result: 'no user Found' })
        }
    } else {
        res.send({ result: 'no user Found' })
    }
})


//  To send  movies data to add movies in database   
app.post("/movies", async (req, res) => {
    const movie = new Movie(req.body);
    let result = await movie.save();
    res.send(result)
})


app.get("/movies", async (req, res) => {
    let movie = await Movie.find()
    if (movie.length > 0) {
        res.send(movie)
    } else {
        res.send({ result: "no movies found " })
    }

})

app.post("/adminlog", async (req, res) => {
    let AdminLog = await Admin.findOne(req.body).select("-password")
    if (AdminLog) {
        res.send(true)
    } else {
        res.send(false)
    }

})

app.post("/ticketrecords", async (req, res) => {
    const ticketrecodrs = new Ticketrecodrs(req.body);
    const result = await ticketrecodrs.save();
    res.send(result);
})

app.get("/ticketrecords/:id", async (req, resp) => {
    const id = req.body.id
    const result = await Ticketrecodrs.findOne(id);
    // const result = await Ticketrecodrs.findOne({_id:req.params.id})
    resp.send(result)
})

app.get("/allrecords", async (req, resp) => {
    const result = await Ticketrecodrs.find()
    resp.send(result)
})

app.get("/allrecords/:email", async (req, resp) => {
    const emailid = req.params.email
    console.log(emailid)
    const result = await Ticketrecodrs.findMany({ email: "emailid" })
    resp.send(result)
})


app.delete("/cancel/:time", async (req, res) => {
    const time = req.params.time
    const result = await Ticketrecodrs.deleteOne({ time: time })

    res.send(result)
})

app.post("/seat", async (req, res) => {
    const data = new Seat(req.body)
    const result = await data.save()
    res.send(result)
})

app.get("/seat", async (req, res) => {
    const result = await Seat.find()
    res.send(result)
})

app.get("/search/:key", async (req, res) => {
    console.log(req.params.key)
    let result = await Movie.find({
        "$or": [
            { theater_city: { $regex: req.params.key } },
            { movie_title: { $regex: req.params.key } },



        ]
    })
    res.send(result)
})
app.listen(5500);