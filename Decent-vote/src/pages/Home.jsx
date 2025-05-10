import React from "react";
import Nodeapp from "../components/Nodeapp";
import Homeabout from "../components/Homeabout";
import Started from "../components/Started";
import Result from "../components/Result";
import VerificationForm from "../components/Createrverification";
import CreateVote from "../components/CreateVote";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* ------------ Hero Section ------------- */}
      <Nodeapp />

      {/* ------------ Voting Records Section ------------- */}
      <div className="px-20 my-5">
        <Homeabout />
      </div>

      {/* ------------ Getting Started Section ------------- */}
      <div className=" bg-[#2b3440] my-5 w-auto h-[80vh]">
        <Started />
      </div>

      {/* ------------ Result Section ------------- */}
      <div className="my-[100px]">
        <Result />
      </div>
    </div>
  );
};

export default Home;
