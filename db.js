const mongoose = require('mongoose');
require('dotenv').config();

const mongourl = process.env.DB_URL; // replace after 7/ with your dbs name
// const mongourl = process.env.DB_URL;

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