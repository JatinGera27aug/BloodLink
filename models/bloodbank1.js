const mongoose = require('mongoose');

const bloodbankSchema = new mongoose.Schema({
    org_name: { type: String },
    setup: {type: String,
        default: Date.now},
   org_id:{
        type: Number,
        // required: true,
        unique: true
    },
    address:{
        type:String,
        required:true
    }
})

const BloodBank = mongoose.model('BloodBanks', bloodbankSchema)
module.exports = BloodBank;

// const mongoose = require('mongoose');

// const bloodbankSchema = new mongoose.Schema({
//     org_name: { type: String },
//     setup: {
//         type: String,
//         default: Date.now
//     },
//     org_id: {
//         type: Number,
//         // required: true,
//         unique: true
//     }
// });

// // Define getter and setter methods for org_name
// bloodbankSchema.path('org_name').get(function () {
//     return this._org_name;
// }).set(function (value) {
//     this._org_name = value;
// });

// // Define getter and setter methods for setup (optional)
// bloodbankSchema.path('setup').get(function () {
//     return this._setup;
// }).set(function (value) {
//     this._setup = value;
// });

// // Define getter and setter methods for org_id
// bloodbankSchema.path('org_id').get(function () {
//     return this._org_id;
// }).set(function (value) {
//     this._org_id = value;
// });

// const BloodBank = mongoose.model('BloodBank2', bloodbankSchema);
// module.exports = BloodBank;
