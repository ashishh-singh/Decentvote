const express = require("express")
const app = express()
const cors = require("cors")
const port = 8000;
const mongo = require("mongoose")
const bodyparser = require("body-parser")
const useRoute = require("./routes/usercreate")
const User = require("./models/verficationform")
const createVote = require("./routes/createvote")
// add middlewares

app.use(cors())
app.use(express.json());



// mongodb

mongo.connect("mongodb://localhost:27017/Decent-vote").then(()=> console.log("Database is connected successfully")).catch((err)=> console.log(err))


//Route
// app.get("/",(req,res)=>(
//     res.send("hello world")
// ))
// app.get("/home", (req,res)=> {
//     res.json({message: "hello ji kaise ho aap"})
// })

app.use("/api", useRoute)
app.use("/api", createVote)


app.get("/finduser", async(req,res)=> {
    const user = await User.find({})
    return res.json(user)
})

app.listen(port, ()=> console.log(`port is started at ${port}`))