import React from 'react';
import { useLocation } from 'react-router-dom';

const ThankYou = () => {
  const location = useLocation();
  
  const { message, voteId } = location.state || {}; 

  let content;

  // Check if the message exists
  if (message) {
    content = <p className="mt-4 text-lg">{message}</p>;
  }
  // Check if voteId exists
  else if (voteId) {
    content = (
      <>
        <p className="mt-4 text-lg">Vote ID: {voteId}</p>
        <div className="mt-6 p-4 bg-green-200 rounded-lg">
          <h2 className="text-xl font-bold">Vote ID:</h2>
          <p className="text-lg font-semibold text-green-600">{voteId}</p>
        </div>
      </>
    );
  } 
  // Default message when neither message nor voteId is available
  else {
    content = <p className="mt-4 text-lg">Your vote action was successful.</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center mt-20 p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-500">Thank You!</h1>
        
        {/* Render the dynamic content based on conditions */}
        {content}
      </div>
    </div>
  );
};

export default ThankYou;
