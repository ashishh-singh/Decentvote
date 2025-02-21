const express = require("express")
const route = express.Router();
const {VotingForm} = require("../models/creatVote");
const { findById } = require("../models/verficationform");

route.post("/vote/:votingforms._id", async (req,res) => {
    const {voterid} = req.params
    const candiate = await findById({voterid})
})