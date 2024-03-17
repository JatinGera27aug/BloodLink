const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    name: { type: String, default:"heerlal"},
    dob: {type: String,default:"12/19/2001"},
    mobile:{
        type: Number,
        required: true,
        unique: true,
        default: 9999349340
    },
    aadhar_number:{
        type: Number,
        required: true,
        unique: true,
        length:12,
        default:123430951280
    },
    email:{
        type: String,
        required: true,
        unique: true,
        default:  "1cfq@gmail.com"
    }
})

const Donor = mongoose.model('Donor', donorSchema)
module.exports = Donor;