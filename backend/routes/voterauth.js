const express = require("express")
const route = express.Router();
const {VotingForm} = require("../models/creatVote")

route.post("/voterauth",async (req,res)=> {
    const {voterId, voterPhone,} =req.body;
    console.log(voterId,"this is id")
   
    try {
        const votingForm = await VotingForm.findOne(
            {
              voters: {
                $elemMatch: {
                  voterIed: voterId,
                  voterPhoneNumber: voterPhone
                }
              }
            },
            { 'voters.$': 1 } 
          );
          
    
      if (!votingForm || !votingForm.voters || votingForm.voters.length === 0) {
        return res.status(404).json({
          is_success: false,
          message: "Voter not found"
        });
      }
    
      const voter = votingForm.voters[0];
    
      if (voter.isvote === 1) {
        console.log(" alreadyy")
        return res.status(400).json({
          is_success: false,
          message: "Voter has already cast the vote"
        });
      }


    
  await VotingForm.updateOne(
    { 'voters.voterIed': voterId },
    { $set: { 'voters.$.isvote': 1 } }
  );

  return res.status(200).json({
    is_success: true,
    message: "Voter is verified and marked as voted",
    voter: { ...voter.toObject(), isvote: 1 }
  });

    } catch (error) {
      console.error("Error checking voter:", error);
      res.status(500).json({
        is_success: false,
        message: "Internal server error"
      });
    }
    
})

module.exports = route;