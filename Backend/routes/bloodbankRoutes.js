const express = require('express');
const router = express.Router(); // manage all  the routes of our application

const db = require('./../db');
const BloodBank = require('./../models/bloodbank');
// function myMiddleware(req, res, next) {
//     // Do something with the request
//     console.log('Middleware function executed');
//     // Call the next middleware function
//     next();
// }
// router.use(myMiddleware);

router.post('/', async (req, res) => {
    try{
        const newBloodbank_data = req.body;
        const newBloodbank = new BloodBank(newBloodbank_data);
        const savedBloodbank_response = await newBloodbank.save()
        console.log('data saved');
        res.status(200).send(savedBloodbank_response);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error')
    }
})

router.get('/',async (req,res)=>{
    try{
    const data = await BloodBank.find();
    console.log(data);
    res.status(200).send(data);
    // res.status[200].json(data);
}
    catch(err){
        console.log(err);
        // res.status[500].json({error: 'Internal Server Error'})
    }
})


// router.put("/:id", async (req,res)=>{
//     try{
//         const userID = req.params.id;
//         const updateUserData = req.body;

//         const response = await User.findByIdAndUpdate(userID, updateUserData, {
//             new  : true, // update hone ke bad ka data hi milega
//             runValidators:true // run mongoose validation
//         })

//         if(!response){ // id not present
//             return res.status(404).send('No record found with given details');
//         }

//         console.log("data updated");
//         console.log(response);
//         res.status(200).send(response);

//     }
//     catch(err){ // update hua nhi
//         console.log(err);
//         res.status(500).send("Internal Server Error");
//     }
// })

// router.delete("/:id", async(req,res)=>{
//     try{
//         const userID = req.params.id;

//         const response =  await User.findByIdAndDelete(userID);
//         if (!response) {
//             console.log("can't find user");
//             res.status(404).send("no user found with given attributes");
//         }
//         console.log("deleted");
//         res.status(200).send("user deleted");
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).send("Internal Server Error");
//     }
// })

module.exports = router;