const express = require("express")
const router = express.Router();
const {verifiy} = require("../controller/verifcation")
const User = require("../models/verficationform")

//
// router.post("/createvote", verifiy)

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