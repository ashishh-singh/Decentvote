import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'; 
const CandidatesPage = () => {
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const votingFormId = Cookies.get('electionid'); 
    console.log(`this is the votingformid ${votingFormId}`)

    if (!votingFormId) {
      setError('Voting Form ID not found!');
      return;
    }

    axios
      .get(`http://localhost:8000/api/candidates/${votingFormId}`, {withCredentials:true})
      .then((response) => {
        if (response.data.success) {
          setCandidates(response.data.candidates);
        }
      })
      .catch((err) => {
        setError('Failed to load candidates. Please try again later.');
        console.error(err);
      });
  }, []); 

  const handleVote = (candidateId) => {
    const votingFormId = Cookies.get('electionid');  

    if (!votingFormId) {
      setError('Voting Form ID not found!');
      return;
    }

    // Update the vote count (You would typically send a request to the backend to update the vote)
    axios
      .put(`http://localhost:8000/api/vote/${candidateId}`, {
        votingFormId: votingFormId,  
      }, {withCredentials:true})
      .then((response) => {
       
        if (response.data.success) {
          navigate("/thankyou",{state:{message:"Your vote has been successfully added."}});
        }
      })
      .catch((err) => {
        console.error("Error casting vote:", err);
        setError("Failed to cast vote. Please try again later.");
      });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Candidates</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <table className="table-auto w-full mb-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Party</th>
              <th className="border px-4 py-2">Symbol</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate._id}>
                <td className="border px-4 py-2">{candidate.memberName}</td>
                <td className="border px-4 py-2">{candidate.partyName}</td>
                <td className="border px-4 py-2">{candidate.symbol}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleVote(candidate._id)}
                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-lg"
                  >
                    Vote
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidatesPage;
