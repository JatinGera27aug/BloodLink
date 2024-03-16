const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dob: {type: String},
    mobile:{
        type: Number,
        required: true,
        unique: true
    },
    aadhar_number:{
        type: Number,
        required: true,
        unique: true,
        length:12,
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User;