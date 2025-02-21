import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Don't forget to import axios if you want to make HTTP requests

const LoginPage = () => {
  const [uniqueId, setUniqueId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phoneNumber || !uniqueId) {
      setError('Please enter both Unique ID and Phone Number!');
      return;
    }

  
    axios
      .post("http://localhost:8000/api/voterauth", { "voters.voterId": uniqueId, voterPhone: phoneNumber },{withCredentials:true})
      .then((response) => {
        console.log(response.data);
        
          console.log("you will move to voiting page")
          navigate("/candidates");
        
      })
      .catch((err) => {
        setError("Authentication failed. Please try again.");
        console.error("Error:", err);
      });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Election Portal</h2>
        
        <div className="mb-6">
          <label htmlFor="uniqueId" className="block text-gray-700 font-medium mb-2">Enter Your Unique ID</label>
          <input
            type="text"
            id="uniqueId"
            value={uniqueId}
            onChange={(e) => setUniqueId(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg text-lg"
            placeholder="Unique ID"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">Enter Your Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg text-lg"
            placeholder="Phone Number"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleSubmit}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
