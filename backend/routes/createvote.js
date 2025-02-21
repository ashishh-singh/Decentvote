const express = require("express")
const router = express.Router();
const {candidate, voter, VotingForm} = require("../models/creatVote")

router.post("/Vote", async (req,res)=> {
    const {candidates, voters} = req.body;
    // const body = req.body
    // console.log("insdie the route", memberName, partyName, symbol, voterName, voterId, voterPhoneNumber)
    console.log("inside the block", candidates, voters)
    try{

        // const vote = await voter.create({
        //     memberName:memberName,
        //     partyName:partyName,
        //     symbol:symbol,
    
        // })
        const voteForm = await VotingForm.create({
            candidates,
            voters,
    
        })

        // const Candidate = await candidate.create({
        //     voterName:voterName,
            
        //     voterId:voterId,
        //     contact:voterPhoneNumber,
        // })

        console.log("inside the try block",voteForm)
        if(voteForm){
            return res.status(201).json({
                success:true,
                message:"vote is created ",
                voteForm:voteForm,
                id: voteForm._id
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