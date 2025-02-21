import React from "react";

function Aboutcard({ number, name }) {
  return (
    <div>
      <div
        class="card bg-neutral text-neutral-content flex justify-center mt-3 rounded-xl h-32 w-36
        "
      >
        <div class="card-body items-center text-center">
          <h1 class="card-title text-green-500 border-b-2 border-green-500 font-extrabold text-3xl pb-1 pt-2">
            {number}
          </h1>
          <p className="text-center text-md font-semibold">{name}.</p>
        </div>
      </div>
    </div>
  );
}

export default Aboutcard;
