import React from "react";
import StartedGuideCard from "./StartedGuideCard";

const guideData = [
  {
    title: "1. Fill out the form",
    description:
      "Fill out the form with the details of your poll and the options you want to vote on.",
  },
  {
    title: "2. Add or Invite Participants",
    description:
      "Add candidates of elections and share the link with the voters and members of election.",
  },
  {
    title: "3. Get Result",
    description:
      "As soon as a vote is cast, the resutl are updated in real time and can be visible to everyone.",
  },
];

function Started() {
  return (
    <div className="p-4 text-white">
      <h3 className="text-emerald-500 font-bold my-10 text-center uppercase text-4xl">
        {" "}
        getting started
      </h3>
      <h1 className="text-center text-white text-3xl font-bold m-3">
        How to use Decent-Vote in three simple steps
      </h1>
      <p className="text-center text-[#EFF3EA] text-xl ml-20 mr-20 mb-10">
        {" "}
        We have designed our free poll maker and online election to be an easy
        and intuitive to use as possible. At the same time, we are constantly
        optimizing the workflow for creating simple, yet well-designed polls.
      </p>

      {/* ----------- Guide Cards ---------- */}
      <section>
        <div class="container px-6 m-auto ">
          <div class="grid grid-cols-4 gap-6  md:grid-cols-8 lg:grid-cols-12">
            {
              guideData.map((data, index)=> {
                return <StartedGuideCard key={index} title={data.title} description={data.description} />
              })
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default Started;
