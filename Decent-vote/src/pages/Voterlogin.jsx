import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [uniqueId, setUniqueId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Simulate sending OTP (you would replace this with an actual service)
  const handleSendOTP = () => {
    if (!phoneNumber || !uniqueId) {
      setError('Please enter both Unique ID and Phone Number!');
      return;
    }

    // Simulate sending OTP
    const otp = '123456'; // You'd send this dynamically from a backend
    setConfirmationResult(otp);
    alert('OTP sent! Please check your phone.');
  };

  // Simulate OTP verification
  const handleVerifyOTP = () => {
    if (confirmationResult && verificationCode === confirmationResult) {
      // After successful verification, navigate to the candidates list page
    //   navigate(`/candidates/${uniqueId}`);
    } else {
      setError('Invalid OTP. Please try again.');
      navigate("/vote");
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

        {confirmationResult === null ? (
          <button
            onClick={handleSendOTP}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-200"
          >
            Send OTP
          </button>
        ) : (
          <>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Enter OTP"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg text-lg"
              />
            </div>

            <button
              onClick={handleVerifyOTP}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition duration-200"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
