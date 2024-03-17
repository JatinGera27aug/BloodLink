const express = require('express');
const router = express.Router(); // manage all  the routes of our application

const db = require('./../db');
const Donor = require('./../models/donor');

router.post('/', async (req, res) => {
    try{
        const newDonor_data = req.body;
        const newDonor = new Donor(newDonor_data);
        const savedDonor_response = await newDonor.save()
        console.log('data saved');
        res.status(200).send(savedDonor_response);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error')
    }
})

router.get('/',async (req,res)=>{
    try{
    const data = await Donor.find();
    console.log(data);
    res.status(200).send(data);
    // res.status[200].json(data);
}
    catch(err){
        console.log(err);
        // res.status[500].json({error: 'Internal Server Error'})
    }
})

module.exports = router;