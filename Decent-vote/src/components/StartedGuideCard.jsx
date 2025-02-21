import React from "react";

const StartedGuideCard = ({ title, description}) => {
  return (
    <div class="col-span-4 mt-6 bg-green-500 rounded py-4 mx-2 ">
      <h2 className="text-xl font-bold ml-4">{title}</h2>
      <h3 className="text-lg mt-3 ml-5 mr-10 text-[#EFF3EA]">
        {description}
      </h3>
    </div>
  );
};

export default StartedGuideCard;
