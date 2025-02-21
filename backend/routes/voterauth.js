const express = require("express")
const route = express.Router();
const {VotingForm} = require("../models/creatVote")

route.post("/voterauth",async (req,res)=> {
    const {voterId, voterPhone, electionId} =req.body;

    const voter = await VotingForm.findOne({voterIed:voterId})
    console.log(voter)
    if(voter){
    return res.status(201).json({
        sucsess:true,
        message:"find the voter",
        voter:voter
    })
}
else{   
    return res.status(500).json({
        success:false,
        message:"there is some error",

    })
}

})

module.exports = route;