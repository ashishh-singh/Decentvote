const express = require("express")
const router = express.Router();
const {verifiy} = require("../controller/verifcation")
const User = require("../models/verficationform")

const client = require('../twilio');



// client.messages
//   .create({
//     body: `OTP for creating vote in decent-vote is ${otp}.`,
//     from: '',
//     to: '+19876543210'
//   })
//   .then(message => console.log('Sent:', message.sid))
//   .catch(err => console.error('Error:', err));



//
// router.post("/createvote", verifiy)

let otpStore = {};

router.post("/api/send-otp-and-verify", async(req,res) => {
    const {phone} = req.body
    if(!phone){
        res.status(404).json({
            is_success:false,
            message:"phone no is missing"
        })
    }
try {
    const otp = Math.floor(1000 + Math.random() * 9000);
    // console.log("otp ", otp);
    otpStore[phone] = otp;

    client.messages
        .create({
            body: `Your OTP is ${otp} for decent-vote`,
            from: '+15739943640',  
            to: `+91${phone}`
        })
        .then((message) => console.log("OTP sent to user:", message.sid))
        .catch((err) => console.error("Error sending OTP:", err));

//    console.log(otp, "thsi is oto and it passes")
    return res.status(200).json({
        is_success: true,
        otp:otp,
        message: "OTP sent successfully to your phone number."
    });

} catch (error) {
    console.error("Error sending OTP:", error);
    return res.status(500).json({
        is_success: false,
        message: "Internal server error."
    });
}
});


router.post("/createvote", async (req,res) => {
    const body = req.body;
    console.log("hello world its inside the function")
    

    try{    
        
     
   
    const user = await User.create({
        name:body.name,
        email:body.email,
        phone:body.phone,
        gender:body.gender,
        role:body.role,
        companyName: body.companyName,
        companyEmail: body.companyEmail
        
    })



    if(user){
        return res.status(201).json({
            success:true,
            message:"user is created ",
            user:user
        });
    }
    else{
        return res.status(400).json({
            success:false,
            messagge:"Failed to create user",
        })
    }
}
catch (err){
    return res.status(500).json({
        success:false,
        message:"server error while creating user",
        error:err.message
    })
}


});


module.exports = router;