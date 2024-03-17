const express = require('express');
app = express();
// const json=require('json');   
const db = require('./db');
const User = require('./models/user1');
// const Donor = require('./models/donor');
const BloodBank = require('./models/bloodbank1');
const Donor = require('./models/donor');

const React = require('react');
const ReactDOMServer = require('react-dom/server');
// const Receiver = require('./models/receiver');

require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());            // middleware for parsing json data
// middleware func
const logRequest=(req,res,next)=>{
    console.log(`${new Date().toLocaleDateString()} request made to server`)
    next();
}
// app.use(bodyParser.json());            // middleware for parsing json data

app.use(logRequest);

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(async (username,password, done)=>{
    try{
        console.log(`received credentials`,username, password);
        const user = User.findOne({username:username});
        if(!user){
            return done(null,false,{message:'Incorrect username'});
        };
        const isPasswordMatch=user.password===password?true:false;
        if(isPasswordMatch){
            return done(null, user);
        }else{
            return done(null,false,{message:'Incorrect password'});
        }
    }
    catch(err){
        return done(err);
    }
}))


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

app.get('/user',async (req,res)=>{ //,passport.authenticate('local',{session:false})
    try{
    const data = await User.find();
    console.log(data);
    res.status(200).send(data);
    // res.status[200].json(data);
}
    catch(err){
        console.log(err);
        // res.status[500].json({error: 'Internal Server Error'})
    }
})
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');
// app.get('/user/:name',passport.authenticate('local',{session:false}),async (req,res)=>{
app.get('/user/:name',async (req,res)=>{
    try{
    const username = req.params.name;
    const UserData = req.body;
    const data = await User.find({"name":username});
    // console.log(data);
    res.render('index.html',{name:username});
    // res.status(200).send(data);
    // res.status[200].json(data);
}
    catch(err){
        console.log(err);
        // res.status[500].json({error: 'Internal Server Error'})
    }
})


app.put("/user/:aadhar_number", async (req,res)=>{
    try{
        const userID = req.params.aadhar_number;
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

app.delete("/user/:aadhar_number", async(req,res)=>{
    try{
        const userID = req.params.aadhar_number;

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
const bloodbankRoutes = require('./routes/bloodbank1Routes')
const donorRoutes = require('./routes/donorRoutes')
// // user router files
// app.use("/user", userRoutes);
app.use("/bloodbank", bloodbankRoutes);
app.use("/donor", donorRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log('server is live');
})