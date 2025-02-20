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
      <Nodeapp />
      <div className="px-20 my-5">
        <Homeabout />
      </div>

      <div className=" bg-emerald-500 my-5 w-auto h-[70vh]">
        <Started />
      </div>
      <div className="my-[100px]">
        <Result />
      </div>
      {/* <div>
        <VerificationForm />
      </div> */}

      {/* <div>
        <CreateVote />
      </div> */}
    </div>
  );
};

export default Home;
