const mongoose = require('mongoose');


// Define a schema for the VerificationForm
const verificationFormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    role: { type: String, required: true },
    companyName: { type: String, required: true },
    // companyAddress: { type: String, required: true },
    // companyPhone: { type: String, required: true },
    companyEmail: { type: String, required: true },
    // otp: { 
    //   type: [String], 
    //   required: true,
    //   validate: [arrayLimit, 'OTP must be an array of 4 values'], 
    //   default: ['', '', '', '']
    // },
    // isVerified: { type: Boolean, default: false }, 
    // otpEntered: { type: String, required: false } 
  },
  { timestamps: true }
);

// function arrayLimit(val) {
//   return val.length === 4;
// }


const VerificationForm = mongoose.model('VerificationForm', verificationFormSchema);

module.exports = VerificationForm;
