const verification = require("../models/verficationform")

async function verifiy(req,res){
    const body = req.body;

    try{

   
    const user = await new verification.create({
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

}

module.exports = {verifiy};