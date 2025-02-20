import React from 'react'

function Result() {
  return (
    <div>
         <section>
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6">
                <h1 className='text-center mt-10 uppercase font-bold text-4xl '>Get Your results in real time</h1>
                <h1 className='mr-5 ml-5 mt-16 text-xl'>The results of each election and poll are updated in real time via server-to-client push communication. Who has access to the live results. As soon as a poll has been completed, the results can be seen and exported in required format.</h1>
            </div>
            <div className="col-span-4 lg:col-span-6">
                <img className='rounded-2xl' src="./public/graph.png" alt="graph" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Result;