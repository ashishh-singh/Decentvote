const express = require("express")
const route = express.Router();
const {VotingForm} = require("../models/creatVote")
const cookieParser = require("cookie-parser");

route.use(cookieParser())

route.post("/result", async (req,res)=> {
    // const {electionId}= req.body;
    const {uniqueId} = req.body
    console.log("andar hi hu",uniqueId)

    try{

    
    const user = await VotingForm.findOne({_id:uniqueId})
    console.log(user)
    console.log(uniqueId)
    res.cookie("electionid",uniqueId)
    console.log("cookie ban gyi")
    if(user){
        // res.cookie("electionid",uniqueId)

        return res.status(201).json({
            success:true,
            message:"election is found",
            candidates:user.candidates
        });
    }
    else{
        return res.status(400).json({
            success:false,
            message:"Failed to enter"
        })
    }
}
catch(err){
    return res.status(500).json({
        success:false,
        message:"server error while finding",
        error:err.message
    })
}

})

module.exports = route;