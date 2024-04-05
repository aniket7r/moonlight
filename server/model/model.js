// const  mongoose = require("mongoose");

// const SignUpSchema = new mongoose.Schema({
//     fistName : String,
//     lastName : String,
//     email : String,
//     password : String
// })

// const SignUpModel = mongoose.model("test", SignUpSchema)
// module.exports = SignUpModel

const mongoose = require('mongoose');

// Connect to MongoDB

// Define schemas
const VolunteerSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    birth_year : Number,
    is_volunteer : Boolean
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    birth_year : Number,
    is_volunteer : Boolean
});


const Volunteer = mongoose.model('Volunteer', VolunteerSchema);
const User = mongoose.model('User', UserSchema);

module.exports = {
    Volunteer,
    User
}
