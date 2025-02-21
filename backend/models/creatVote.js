const mongoose = require('mongoose');



const candidateSchema = new mongoose.Schema(
  {
    memberName: { type: String, },
    partyName: { type: String,  },
    symbol: { type: String,     }
  },
);


const voterSchema = new mongoose.Schema(
  {
    voterName: { type: String,  },
    voterPhoneNumber: {type: String,},
    voterIed: { type: String,  index:false},
    
  },
  {_id:false  }
  
);


const votingFormSchema = new mongoose.Schema(
  {
    candidates: [candidateSchema], 
    voters: [voterSchema],
  },
  { timestamps: true } 
)


const VotingForm = mongoose.model('VotingForm', votingFormSchema);
const candidate = mongoose.model("candidate", candidateSchema);
const voter = mongoose.model("voter", voterSchema)
module.exports = {
  VotingForm,
    voter,
    candidate
};
