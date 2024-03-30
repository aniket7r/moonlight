const  express= require("express");
const mongoose = require("mongoose");
const cors =  require("cors");
const SignUpModel = require("./model/model")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://aniketkumar6256:earthware0306@cluster0.lsqwmdr.mongodb.net/test");

app.post('/signup', (req, res) => {
    SignUpModel.create(req.body)
    .then(test => res.json(test))
    .catch(err => res.json(err))
})

app.listen(3009, () => {
    console.log("server is running")
})
