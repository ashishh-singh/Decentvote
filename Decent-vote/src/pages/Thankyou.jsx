import React from 'react';
import { useLocation } from 'react-router-dom';

const ThankYou = () => {
  const location = useLocation();
  const { voteId } = location.state || {}; 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center mt-20 p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-500">Thank You!</h1>
        <p className="mt-4 text-lg">Your vote has been successfully created.</p>
        
        
        {voteId ? (
          <div className="mt-6 p-4 bg-green-200 rounded-lg">
            <h2 className="text-xl font-bold">Vote ID:</h2>
            <p className="text-lg font-semibold text-green-600">{voteId}</p>
          </div>
        ) : (
          <p className="text-red-500">Vote ID could not be retrieved.</p>
        )}
      </div>
    </div>
  );
};

export default ThankYou;
