import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

// const Dovote = () => {
//   const { uniqueId } = useParams();
//   const [candidates, setCandidates] = useState([]);
//   const [voted, setVoted] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // Fetch candidates from the backend
//   useEffect(() => {
//     const fetchCandidates = async () => {
//       try {
//         // Replace with your actual API URL
//         const response = await axios.get(`/api/candidates?uniqueId=${uniqueId}`);
//         setCandidates(response.data); // Assuming the backend sends a list of candidates
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to load candidates');
//         setLoading(false);
//         console.error(err);
//       }
//     };

//     fetchCandidates();
//   }, [uniqueId]);

//   const handleVote = (candidateId) => {
//     if (!voted) {
//       // Send the vote data to the server (API call, etc.)
//       console.log(`Voted for Candidate ID: ${candidateId}`);
//       alert(`Thank you for voting! You voted for Candidate ${candidateId}`);
//       setVoted(true);

//       // Simulate session expiry
//       setTimeout(() => {
//         alert('Session expired');
//         navigate('/');
//       }, 5000); // Expire session after 5 seconds
//     } else {
//       alert('You have already voted!');
//     }
//   };

//   if (loading) {
//     return <div className="text-center">Loading candidates...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500">{error}</div>;
//   }

//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
//       <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Election - Unique ID: {uniqueId}</h2>
//       <p className="text-lg text-gray-700 mb-8">Choose a candidate and cast your vote.</p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {candidates.map((candidate) => (
//           <div key={candidate.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <img
//               src={candidate.logoUrl} 
//               alt={candidate.name}
//               className="w-24 h-24 mx-auto mb-4 rounded-full"
//             />
//             <h3 className="text-xl font-semibold text-gray-800">{candidate.name}</h3>
//             <button
//               onClick={() => handleVote(candidate.id)}
//               className="mt-4 bg-transparent border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-lg text-lg font-semibold transition duration-200 hover:bg-blue-600 hover:text-white"
//             >
//               Vote Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const Dovote = () => {
    return(
        <>
        <div>
            hello world</div></>
    )
}

export default Dovote;
