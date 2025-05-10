import React from "react";

function Aboutcard({ number, name }) {
  retur
        <div class="card bg-neutral text-neutral-content flex justify-center mt-3 rounded-xl h-32 w-36
        ">
  <div class="card-body items-center text-center">
    <h1 class="card-title text-green-500 underline font-extrabold text-4xl">{number}</h1>
    <p className='text-center text-xl mt-2 font-bold uppercase'>{name}</p>
    {/* <div class="card-actions justify-end">
      <button class="btn btn-primary">Accept</button>
      <button class="btn btn-ghost">Deny</button>
    </div> */}
  </div>
      <div
        class="card bg-neutral text-neutral-content flex justify-center mt-3 rounded-xl h-32 w-36
        "
      >
        <div class="card-body items-center text-center">
          <h1 class="card-title text-green-500 border-b-2 border-green-500 font-extrabold text-3xl pb-1 pt-2">
            {number}
          </h1>
          <p className="text-center text-md font-semibold">{name}</p>
        </div>
      <
    </div>
  );
}

export default Aboutcard;
