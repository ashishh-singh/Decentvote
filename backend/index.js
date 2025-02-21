const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.port||8000;
const mongo = require("mongoose")
const bodyparser = require("body-parser")
const useRoute = require("./routes/usercreate")
const User = require("./models/verficationform")
const createVote = require("./routes/createvote")
const {VotingForm} = require("./models/creatVote")
const electionid = require("./routes/electionid")
const votercheck = require("./routes/voterauth")
const cookieParser = require("cookie-parser")
const makevote = require("./routes/makevote")
const result = require("./routes/result")
// add middlewares

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true, 
    methods: ['GET', 'POST', 'PUT']
  };
  app.use(cors(corsOptions));
  

// app.use(cors())
app.use(express.json());
app.use(cookieParser())



// mongodb
const mongoURl = "mongodb+srv://autophileashish:myaccount@decent-vote.srt5x.mongodb.net/"
// mongo.connect("mongodb://localhost:27017/Decent-vote").then(()=> console.log("Database is connected successfully")).catch((err)=> console.log(err))
mongo.connect(mongoURl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("Error connecting to MongoDB Atlas:", err));

//Route
// app.get("/",(req,res)=>(
//     res.send("hello world")
// ))
// app.get("/home", (req,res)=> {
//     res.json({message: "hello ji kaise ho aap"})
// })

app.use("/api", useRoute)
app.use("/api", createVote)
app.use("/api",electionid)
app.use("/api",votercheck)
app.use("/api",makevote)
app.use("/api", result)


app.get("/finduser", async(req,res)=> {
    const user = await User.find({})
    return res.json(user)
})
app.get("/findvote", async(req,res)=> {
    const user = await VotingForm.find({})
    return res.json(user)
})
app.get("/findvoted", async(req,res)=> {
    const user = await VotingForm.deleteMany({})
    return res.json(user)
})

app.get("/check", (req,res)=> {
    res.cookie("check", "it make cookie")
    return res.json({"hello": 
        "check this out"
    })
})


app.listen(port, ()=> console.log(`port is started at ${port}`))