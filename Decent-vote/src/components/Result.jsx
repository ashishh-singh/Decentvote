import React from "react";
import result from "../assets/result.png";
import { IoIosArrowDropright } from "react-icons/io";

const pollResultsSteps = [
  "Results of each election, poll are updated in real time.",
  "Live results are accessible to authorized users.",
  "If apoll is completed, the results can be viewed.",
  "Results can be exported in the required format."
];


function Result() {
  return (
    <div>
      <section>
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6 flex flex-col items-center justify-center">
              <h1 className="text-center my-8 text-green-500 uppercase font-bold text-4xl ">
                Get Your results in real time
              </h1>
              <ul className="ml-5 mr-5 mt-5 text-xl ">
                {
                  pollResultsSteps.map((step, index) => (
                    <li key={index} className="mb-4  text-gray-500 flex items-center gap-3"> <IoIosArrowDropright className="text-gray-700 text-2xl" /> {step}</li>
                  ))
                }
              </ul>
            </div>
            <div className="col-span-4 lg:col-span-6">
              <img
                className=""
                src={result}
                // src="./public/graph.png"
                alt="graph"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Result;
