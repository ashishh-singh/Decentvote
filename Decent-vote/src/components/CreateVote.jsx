import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VotingForm = () => {
  const [candidates, setCandidates] = useState([{ memberName: '', partyName: '', symbol: '' }]);
  const [voters, setVoters] = useState([{ voterName: '', voterPhoneNumber: '', voterIed: '' }]);
  const navigate = useNavigate();  


  const handleCandidateChange = (index, event) => {
    const updatedCandidates = [...candidates];
    updatedCandidates[index][event.target.name] = event.target.value;
    setCandidates(updatedCandidates);
  };


  const addCandidate = () => {
    setCandidates([...candidates, { memberName: '', partyName: '', symbol: '' }]);
  };


  const handleVoterChange = (index, event) => {
    const updatedVoters = [...voters];
    updatedVoters[index][event.target.name] = event.target.value;
    setVoters(updatedVoters);
  };


  const addVoter = () => {
    setVoters([...voters, { voterName: '', voterPhoneNumber: '', voterIed: '' }]);
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      candidates: candidates,
      voters: voters,
    };

    
    axios.post('http://localhost:8000/api/Vote', formData)
      .then((response) => {
        console.log('Voting form created:', response.data);
        alert("Election conducted succesfully")
        navigate('/thankyou', { state: { voteId: response.data.id } });
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form.');
      });
  };

  return (
    <>
      <div>
        <div className="bg-emerald-500 p-8 rounded-lg shadow-xl w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6 text-white uppercase mt-20">Create a Vote</h2>

          {/* Candidates Section */}
          <div>
            <h3 className="text-xl font-semibold text-white my-2">Candidates</h3>
            {candidates.map((candidate, index) => (
              <div key={index} className="flex gap-4 mb-4">
                <input
                  type="text"
                  name="memberName"
                  placeholder="Member Name"
                  value={candidate.memberName}
                  onChange={(e) => handleCandidateChange(index, e)}
                  className="flex-1 p-3 border-b-2 border-green-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="partyName"
                  placeholder="Party Name"
                  value={candidate.partyName}
                  onChange={(e) => handleCandidateChange(index, e)}
                  className="flex-1 p-3 border-b-2 border-green-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="symbol"
                  placeholder="Party Symbol"
                  value={candidate.symbol}
                  onChange={(e) => handleCandidateChange(index, e)}
                  className="flex-1 p-3 border-b-2 border-green-500 focus:outline-none"
                />
              </div>
            ))}
            <button
              onClick={addCandidate}
              className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-teal-600 focus:outline-none"
            >
              Add Candidate
            </button>
          </div>

          {/* Voters Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white my-2">Voters</h3>
            {voters.map((voter, index) => (
              <div key={index} className="flex gap-4 mb-4">
                <input
                  type="text"
                  name="voterName"
                  placeholder="Voter Name"
                  value={voter.voterName}
                  onChange={(e) => handleVoterChange(index, e)}
                  className="flex-1 p-3 border-b-2 border-green-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="voterPhoneNumber"
                  placeholder="Voter Phone Number"
                  value={voter.voterPhoneNumber}
                  onChange={(e) => handleVoterChange(index, e)}
                  className="flex-1 p-3 border-b-2 border-green-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="voterIed"
                  placeholder="Voter Unique ID"
                  value={voter.voterIed}
                  onChange={(e) => handleVoterChange(index, e)}
                  className="flex-1 p-3 border-b-2 border-green-500 focus:outline-none"
                />
              </div>
            ))}
            <button
              onClick={addVoter}
              className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-teal-600 focus:outline-none"
            >
              Add Voter
            </button>
          </div>

          {/* Submit Section */}
          <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white font-bold py-2 px-8 rounded-md hover:bg-green-600 focus:outline-none"
            >
              Create Vote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VotingForm;
