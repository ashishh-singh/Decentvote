// // import React, { useState } from 'react';

// // function VerificationForm() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     phone: '',
// //     gender: '',
// //     role: '',
// //     companyName: '',
// //     companyAddress: '',
// //     companyPhone: '',
// //     companyEmail: '',
// //     otp: ['', '', '', ''], // Array for 4 OTP boxes
// //     isVerified: true, // Track if the user has clicked the "Verify" button
// //     otpEntered: '', // Store entered OTP as a string
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     if (name.startsWith('otp')) {
// //       const index = parseInt(name.replace('otp', ''), 10);
// //       const otpArray = [...formData.otp];
// //       otpArray[index] = value.slice(0, 1); // Restrict to one character
// //       setFormData({ ...formData, otp: otpArray });

// //       // Automatically focus the next input
// //       if (value && index < 3) {
// //         document.getElementById(`otp${index + 1}`).focus();
// //       }
// //     } else {
// //       setFormData({ ...formData, [name]: value });
// //     }
// //   };

// //   const handleVerifyClick = () => {
// //     // Simulate verification logic (e.g., API call)
// //     setFormData({ ...formData, isVerified: true });
// //     alert('Phone number or email verified!');
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const fullOtp = formData.otp.join('');
// //     if (fullOtp === '1234') { // Example OTP verification, change this logic
// //       console.log('Form Data:', { ...formData, otp: fullOtp });
// //       alert('Form submitted successfully!');
// //     } else {
// //       alert('Incorrect OTP');
// //     }
// //   };

// import React, { useState } from 'react';
// import axios from 'axios';

// function VerificationForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     gender: '',
//     role: '',
//     companyName: '',
    
    
//     companyEmail: '',
//     isVerified: true, // Keep this as true since OTP section is removed
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleVerifyClick = () => {
//     setFormData({ ...formData, isVerified: true });
//     alert('Phone number or email verified!');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Make an API call to the backend
//     axios.post('http://localhost:8000/createuser/verify', formData) // Replace with your backend endpoint
//       .then((response) => {
//         console.log('Form Data:', response.data);
//         alert('Form submitted successfully!');
//       })
//       .catch((error) => {
//         console.error('Error submitting form:', error);
//         alert('There was an error submitting the form.');
//       });
//   };


//   return (
//     <div id='election' className="min-h-screen bg-emera1 ld-500 flex items-center justify-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
//         <h2 className="text-2xl font-semibold text-green-700 text-center mb-6">
//           User Verification
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="flex flex-wrap gap-6">
//             {/* Name */}
//             <div className="flex-1">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-2 pb-2 border-b border-green-500 focus:outline-none focus:ring-0"
//                 placeholder="Enter your name"
//                 // required
//               />
//             </div>

//             {/* Email */}
//             <div className="flex-1">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-2 pb-2 border-b border-green-500 focus:outline-none focus:ring-0"
//                 placeholder="Enter your email"
//                 // required
//               />
//             </div>

//             {/* Phone */}
//             <div className="flex-1">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-2 pb-2 border-b border-green-500 focus:outline-none focus:ring-0"
//                 placeholder="Enter your phone number"
//                 // required
//               />
//             </div>
//           </div>

//           {/* Gender and Role */}
//           <div className="flex flex-wrap gap-6 mt-6">
//             {/* Gender */}
//             <div className="flex-1">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Gender
//               </label>
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 className="w-full px-2 pb-2 border-b border-green-500 bg-transparent focus:outline-none focus:ring-0"
//                 // required
//               >
//                 <option value="" disabled>
//                   Select your gender
//                 </option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             {/* Role */}
//             <div className="flex-1">
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Role
//               </label>
//               <input
//                 type="text"
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 className="w-full px-2 pb-2 border-b border-green-500 focus:outline-none focus:ring-0"
//                 placeholder="Enter your role"
//                 // required
//               />
//             </div>
//           </div>

//           {/* Company Details */}
//           <div className="mt-6 space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Company Name
//               </label>
//               <input
//                 type="text"
//                 name="companyName"
//                 value={formData.companyName}
//                 onChange={handleChange}
//                 className="w-full px-2 pb-2 border-b border-green-500 focus:outline-none focus:ring-0"
//                 placeholder="Enter company name"
//                 // required
//               />
//             </div>

          

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Company Email
//               </label>
//               <input
//                 type="email"
//                 name="companyEmail"
//                 value={formData.companyEmail}
//                 onChange={handleChange}
//                 className="w-full px-2 pb-2 border-b border-green-500 focus:outline-none focus:ring-0"
//                 placeholder="Enter company email"
//                 // required
//               />
//             </div>
//           </div>

//           {/* Verify Button */}
//           <div className="mt-6">
//             <button
//               type="button"
//               onClick={handleVerifyClick}
//               className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
//             >
//               Verify
//             </button>
//           </div>

//           {/* OTP Fields */}
//           {formData.isVerified && (
//             <div className="mt-6">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 OTP
//               </label>
//               <div className="flex gap-4">
//                 {[...Array(4)].map((_, index) => (
//                   <input
//                     key={index}
//                     id={`otp${index}`}
//                     name={`otp${index}`}
//                     value={formData.otp[index]}
//                     onChange={handleChange}
//                     className="w-12 h-12 text-center border-b border-green-500 text-lg font-medium focus:outline-none focus:ring-0"
//                     maxLength="1"
//                     placeholder="-"
//                     // required
//                   />
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Submit Button (only shown after OTP verification) */}
//           {formData.isVerified && (
//             <div className="mt-6">
//              <a href="/createvote"> <button
//                 type="submit"
//                 className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
//               >
//                 Submit
//               </button>
//               </a>

//             </div>
            
            
//           )}
          
//         </form>
//       </div>
//     </div>
//   );
// }

// export default VerificationForm;

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
    // isVerified: true, 
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVerifyClick = () => {
    setFormData({ ...formData, isVerified: true });
    alert('Phone number or email verified!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make an API call to the backend
    axios
    .post("http://localhost:8000/api/createvote", formData)
    .then((response) => {
      console.log(response.data);
      alert("Form submitted successfully!");
       navigate("/createvote");
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    });
};


  return (
    <div id='election' className="min-h-screen bg-emera1 ld-500 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-green-700 text-center mb-6">
          User Verification
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-6">
            {/* Name */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-2 pb-2 border-b border-green-500 focus:outline-none focus:ring-0"
                placeholder="Enter your name"
                // required
              />
            </div>

            {/* Email */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-2 pb-2 border-b border-green-500 focus:outline-none focus:ring-0"
                placeholder="Enter your email"
                // required
              />
            </div>

            {/* Phone */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-2 pb-2 border-b border-green-500 focus:outline-none focus:ring-0"
                placeholder="Enter your phone number"
                // required
              />
            </div>
          </div>

          {/* Gender and Role */}
          <div className="flex flex-wrap gap-6 mt-6">
            {/* Gender */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-2 pb-2 border-b border-green-500 bg-transparent focus:outline-none focus:ring-0"
                // required
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Role */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-2 pb-2 border-b border-green-500 focus:outline-none focus:ring-0"
                placeholder="Enter your role"
                // required
              />
            </div>
          </div>

          {/* Company Details */}
          <div className="mt-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-2 pb-2 border-b border-green-500 focus:outline-none focus:ring-0"
                placeholder="Enter company name"
                // required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Email
              </label>
              <input
                type="email"
                name="companyEmail"
                value={formData.companyEmail}
                onChange={handleChange}
                className="w-full px-2 pb-2 border-b border-green-500 focus:outline-none focus:ring-0"
                placeholder="Enter company email"
                // required
              />
            </div>
          </div>

          {/* Verify Button */}
          <div className="mt-6">
            <button
              type="button"
              onClick={handleVerifyClick}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Verify
            </button>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
           
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
              >
                Submit
              </button>
          
          </div>
        </form>
      </div>
    </div>
  );
}

export default VerificationForm;
