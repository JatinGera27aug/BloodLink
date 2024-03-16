const express = require('express');
app = express();
// const json=require('json');   
const db = require('./db');
const User = require('./models/user');
// const Donor = require('./models/donor');
const BloodBank = require('./models/bloodbank');
// const Receiver = require('./models/receiver');

require('dotenv').config();

const bodyParser = require('body-parser');

// middleware func
const logRequest=(req,res,next)=>{
    console.log(`${new Date().toLocaleDateString()} request made to server`)
    next();
}
// app.use(bodyParser.json());            // middleware for parsing json data

app.use(logRequest);
app.get('/',(req,res)=>{    // get mei data back to fronts
    res.send("Welcome to BLOOD LINK")
    console.log("hi");
})

app.post('/user', async (req, res) => {
    try{
        const newUser_data = req.body;
        const newUser = new User(newUser_data);
        const savedUser_response = await newUser.save()
        console.log('data saved');
        res.status(200).send(savedUser_response);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error')
    }
})

app.get('/user',async (req,res)=>{
    try{
    const data = await User.find();
    console.log(data);
    res.send(data);
    res.status(200).send(data);
    // res.status[200].json(data);
}
    catch(err){
        console.log(err);
        // res.status[500].json({error: 'Internal Server Error'})
    }
})

app.get('/user/:name',async (req,res)=>{
    try{
    const data = await User.find({name: req.params.name});
    console.log("dtaa fetched");
    console.log(data)
    res.send(data);
    res.status(200).send(data);
    // res.status[200].json(data);
}
    catch(err){
        console.log(err);
        // res.status[500].json({error: 'Internal Server Error'})
    }
})


app.put("/user/:id", async (req,res)=>{
    try{
        const userID = req.params.id;
        const updateUserData = req.body;

        const response = await User.findByIdAndUpdate(userID, updateUserData, {
            new  : true, // update hone ke bad ka data hi milega
            runValidators:true // run mongoose validation
        })

        if(!response){ // id not present
            return res.status(404).send('No record found with given details');
        }

        console.log("data updated");
        console.log(response);
        res.status(200).send(response);

    }
    catch(err){ // update hua nhi
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
})

app.delete("/user/:id", async(req,res)=>{
    try{
        const userID = req.params.id;

        const response =  await User.findByIdAndDelete(userID);
        if (!response) {
            console.log("can't find user");
            res.status(404).send("no user found with given attributes");
        }
        console.log("deleted");
        res.status(200).send("user deleted");
    }
    catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
})




// // import router files
// const userRoutes = require('./routes/userRoutes')
const bloodbankRoutes = require('./routes/bloodbankRoutes')
// // user router files
// app.use("/user", userRoutes);
app.use("/bloodbank", bloodbankRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log('server is live');
})