import React from "react"

export default function Card({title, content}) {
  return (
    <>
      {/*<!-- Component: Card with icon --> */}
      <div className="overflow-hidden text-center bg-blue-200 rounded-xl m-5 shadow-md text-slate-500 shadow-slate-200 h-80">
       
        <figure className="p-6 pb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 mx-auto stroke-emerald-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
            role="graphics-symbol"
            aria-labelledby="title-01 desc-01"
          >
            <title id="title-01"></title>
            {/* <desc id="desc-01">A more detailed description of the icon</desc> */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
            />
          </svg>
        </figure>
    
        <div className="p-6">
          <h3 className="mb-4 text-xl font-medium text-slate-700">{title}</h3>
          <p>
            {content}
          </p>
         
        </div>
       
        <a href="/userverification"> <button className="btn primary bg-emerald-500 w-[90%]"> Click  </button>  </a>
        {/* <button className="btn btn-outline btn-secondary">Secondary</button> */}
           
                
      </div>
      {/*<!-- End Card with icon --> */}
    </>
  )
}