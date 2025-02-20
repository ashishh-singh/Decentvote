import { useState } from "react";
import "./App.css";
// import React, {useState, useEffect} from "react";
import axios from 'axios';

import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import Features from "./pages/Features";
import Home from "./pages/Home";
import VerificationForm from "./components/Createrverification";
// import Createvote from "./components/CreateVote";
import CreateVote from "./pages/Createvote";
import ElectionPage from "./pages/Election";
import LoginPage from "./pages/Voterlogin";
import Dovote from "./pages/Votingpage";
import Resultpage from "./pages/Result"
import Try from "./pages/Try";
import ThankYou from "./pages/Thankyou";
function App() {
  const [count, setCount] = useState(0);
  // const [message, setMessage] = useState('');
  // const [dataResponse, setDataResponse] = useState('');

  // useEffect(()=> {
  //   axios.get('http://localhost:8000').then(respons=>{setMessage(response.data.message)}).catch(err=>{console.log("these was an error", err)});
  // },[]);


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userverification" element={<VerificationForm/>} />
        <Route path="/createvote" element={<CreateVote/>}/>
        <Route path="/election" element = {<ElectionPage/>} />
        <Route path="/voterlogin" element = {<LoginPage/>} />
        <Route path="/vote" element = {<Dovote/>} />
        <Route path="/result" element = {<Resultpage/>} />
        <Route path="/try" element={<Try/>}/>
        <Route path="/thankyou" element ={<ThankYou/>} />
      </Routes>
    </>
  );
}

export default App;
