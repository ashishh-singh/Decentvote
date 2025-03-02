import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ElectionPage = () => {
  const [uniqueId, setUniqueId] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (uniqueId === '') {
      setError('Please enter a valid Unique ID!');
    }

    axios.post("http://localhost:8000/api/election", {uniqueId}, {withCredentials:true})
    .then((response) => {
      console.log(response.data)
      navigate("/voterlogin")
    })
    
    .catch((err) =>{
      // setError(err);
      alert("There is an error")
      console.log(err)
      
      // console.log(`Opening election page for ID: ${uniqueId}`);
    })
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Election Portal</h2>
        
        <div className="mb-6">
          <label htmlFor="uniqueId" className="block text-gray-700 font-medium mb-2">Enter Your Unique ID</label>
          <input
            type="text"
            // name='electionId'
            id="uniqueId"
            value={uniqueId}
            onChange={(e) => setUniqueId(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg text-lg"
            placeholder="Unique ID"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

         {/* <a href="/voterlogin"> */}
         <button
          onClick={handleSubmit}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-200"
        >
          Open Election
        </button>
        {/* </a>  */}

        <div className="text-center mt-6 text-sm">
          <p className="text-gray-600">
            Don't have an ID? <a href="#" className="text-blue-600 hover:underline">Contact support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElectionPage;
