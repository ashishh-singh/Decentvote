import React from 'react'

function Aboutcard({number, name}) {
  return (
    <div>
        <div class="card bg-neutral text-neutral-content flex justify-center mt-3 rounded-xl h-32 w-36
        ">
  <div class="card-body items-center text-center">
    <h1 class="card-title text-green-500 underline font-extrabold text-4xl">{number}</h1>
    <p className='text-center text-xl mt-2 font-semibold'>{name}.</p>
    {/* <div class="card-actions justify-end">
      <button class="btn btn-primary">Accept</button>
      <button class="btn btn-ghost">Deny</button>
    </div> */}
  </div>
</div>
    </div>
  )
}

export default Aboutcard