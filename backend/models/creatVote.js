const mongoose = require('mongoose');



const candidateSchema = new mongoose.Schema(
  {
    memberName: { type: String, required: true },
    partyName: { type: String, required: true },
    symbol: { type: String, required: true }
  },
  { _id: false } 
);


const voterSchema = new mongoose.Schema(
  {
    voterName: { type: String, required: true },
    voterId: { type: String, required: true, unique: true },
    contact: {type: Number,
        require :true,
        unique:true,
    }
  },
  { _id: false } 
);


// const votingFormSchema = new Schema(
//   {
//     candidates: [candidateSchema], // Array of candidates
//     voters: [voterSchema], // Array of voters
//   },
//   { timestamps: true } // Add timestamps for creation and update times
// );


// const VotingForm = mongoose.model('VotingForm', votingFormSchema);
const candidate = mongoose.model("candidate", candidateSchema);
const voter = mongoose.model("voters", voterSchema)
module.exports = {
    voter,
    candidate
};
