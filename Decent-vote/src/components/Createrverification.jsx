import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function VerificationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    role: '',
    companyName: '',
    companyEmail: '',
    otp: ['', '', '', ''],
  });

  const [serverOtp, setServerOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('otp')) {
      const index = parseInt(name.replace('otp', ''), 10);
      const otpArray = [...formData.otp];
      otpArray[index] = value.slice(0, 1);
      setFormData({ ...formData, otp: otpArray });

      if (value && index < 3) {
        document.getElementById(`otp${index + 1}`).focus();
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/api/send-otp-and-verify', {
        phone: formData.phone,
      });
      console.log(response, "this is repone")

      if (response.data.is_success) {
        console.log(response.data.otp,"this is otp")
        setServerOtp(response.data.otp); 
        // console.log(setServerOtp, " this is set opt")
        alert('OTP sent successfully!');
      } else {
        alert('Failed to send OTP.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Error sending OTP.');
    }
  };

  const handleVerifyOtp = () => {
    const enteredOtp = formData.otp.join('');
    // console.log(enteredOtp,"this is entered otp")
    console.log(serverOtp,"this is server otp")
    if (enteredOtp == serverOtp) {

      setIsVerified(true);
      alert('OTP Verified!');
    } else {
      alert('Incorrect OTP.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isVerified) {
      alert('Please verify the OTP first.');
      return;
    }

    axios
      .post('http://localhost:8000/api/createvote', formData)
      .then((res) => {
        alert('Form submitted successfully!');
        navigate('/createvote');
      })
      .catch((err) => {
        console.error('Submission error:', err);
        alert('There was an error submitting the form.');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">User Verification</h2>
        <form onSubmit={handleSubmit}>
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="border-b border-green-500 px-2 py-1" />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="border-b border-green-500 px-2 py-1" />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="border-b border-green-500 px-2 py-1" />
            <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} required className="border-b border-green-500 px-2 py-1" />
            <select name="gender" value={formData.gender} onChange={handleChange} required className="border-b border-green-500 px-2 py-1">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required className="border-b border-green-500 px-2 py-1" />
            <input type="email" name="companyEmail" placeholder="Company Email" value={formData.companyEmail} onChange={handleChange} required className="border-b border-green-500 px-2 py-1" />
          </div>

          {/* OTP Actions */}
          <div className="mt-6 space-y-4">
            <button type="button" onClick={handleSendOtp} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">
              Send OTP
            </button>

            {serverOtp && (
              <>
                <div className="flex justify-center gap-4">
                  {[0, 1, 2, 3].map((i) => (
                    <input
                      key={i}
                      id={`otp${i}`}
                      name={`otp${i}`}
                      value={formData.otp[i]}
                      onChange={handleChange}
                      maxLength={1}
                      className="w-12 h-12 text-center border-b border-green-500 text-xl"
                      required
                    />
                  ))}
                </div>

                <button type="button" onClick={handleVerifyOtp} className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full">
                  Verify OTP
                </button>
              </>
            )}
          </div>

          {/* Submit */}
          {isVerified && (
            <div className="mt-6">
              <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                Submit Form
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default VerificationForm;