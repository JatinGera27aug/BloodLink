const mongoose = require('mongoose');

const bloodbankSchema = new mongoose.Schema({
    org_name: { type: String ,required: true,},
    setup: {type: String,
        default: Date.now},
    contact:{
        type: Number,
        required: true,
        unique: true
    },
   org_id:{
        type: Number,
        required: true,
        unique: true
    }
})

const BloodBank = mongoose.model('BloodBank', bloodbankSchema)
module.exports = BloodBank;