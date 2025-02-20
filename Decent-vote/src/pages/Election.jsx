import React, { useState } from 'react';

const ElectionPage = () => {
  const [uniqueId, setUniqueId] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = () => {
    if (uniqueId === '') {
      setError('Please enter a valid Unique ID!');
    } else {
      setError('');
      // Navigate to the ongoing election page or handle the unique ID verification logic here
      console.log(`Opening election page for ID: ${uniqueId}`);
    }
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

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

         <a href="/voterlogin"><button
          onClick={handleSubmit}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-200"
        >
          Open Election
        </button>
        </a> 

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
