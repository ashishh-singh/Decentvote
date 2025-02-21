const express = require("express");
const route = express.Router();
const { VotingForm, candidate } = require("../models/creatVote");

route.get("/candidates/:votingFormId", async(req,res)=>{
    const {votingFormId} = req.params

    const election = await VotingForm.findById(votingFormId)
    console.log("found something", election.candidates)
    if(election){
        return res.status(201).json({
            success:true,
            message:"candidate list fetch",
            candidates: election.candidates
        })
    }
    else{
        return res.status(500).json({
            success:false,
            message:"something went wrong"
        })
    }
})

route.put("/vote/:candidateId", async (req, res) => {
  const { candidateId } = req.params;
//   const { votingFormId } = req.body;
  const votingFormId = req.cookies["electionid"]
  console.log(`this is from cookie ${votingFormId}`)

  try {
    const votingForm = await VotingForm.findById(votingFormId);

    if (!votingForm) {
      return res.status(404).json({
        success: false,
        message: "Voting form not found",
      });
    }
    const candidateIndex = votingForm.candidates.findIndex(
      (candidate) => candidate._id.toString() === candidateId
    );

    if (candidateIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Candidate not found",
      });
    }

   
    votingForm.candidates[candidateIndex].votes += 1;
    await votingForm.save();
    res.clearCookie("electionid")
    return res.status(200).json({
      success: true,
      message: "Vote cast successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
});

module.exports = route;
