const mongoose = require('mongoose');
require('dotenv').config();

const mongourl = "mongodb://127.0.0.1/bloodlinks"; // replace after 7/ with your dbs name
// const mongourl = "mongodb+srv://jat78901:jat78901@cluster0.n7q0mv9.mongodb.net/";

// setting up connection
mongoose.connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('connected',()=>{       // db event listen krega yha
    console.log("Mongodb connected");
})

db.on("error", (err) => console.log(`Error connecting to database:`))

db.on("disconnected",()=>{      
    console.log("Mongodb dis-connected");
})

// export dbs connection
module.exports = db;