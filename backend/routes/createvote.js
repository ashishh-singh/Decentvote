const express = require("express")
const router = express.Router();
const {candidate, voter} = require("../models/creatVote")

router.post("/Vote", async (req,res)=> {
    const body = req.body;
    console.log("insdie the route")
    try{

        const vote = await voter.create({
            memberName:body.memberName,
            partyName:body.partyName,
            symbol:body.symbol,
    
        })

        const Candidate = await candidate.create({
            voterName:body.voterName,
            contact:body.voterPhoneNumber,
            voterId:body.voterId
        })

        console.log("inside the try block")
        if(vote && Candidate){
            return res.status(201).json({
                success:true,
                message:"user is created ",
                user:user
            });
        }
        else{
            return res.status(400).json({
                success:false,
                messagge:"Failed to create user",
            })
        }
    }
    catch (err){
        return res.status(500).json({
            success:false,
            message:"server error while creating user",
            error:err.message
        })
    }
   
})

module.exports = router;