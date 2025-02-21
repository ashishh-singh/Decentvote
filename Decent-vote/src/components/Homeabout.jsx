import React from 'react'
import Aboutcard from './Aboutcard'

const records = [
  { name: "Onging election", number: "23" },
  { name: "Completed Elections", number: "230+" },
  { name: "Upcoming Polls", number: "13" },
  { name: "Ongoing Dataroom", number: "3" },
  { name: "Completed Dataroom", number: "320+" },
];

function Homeabout() {
  return (
    <div className='flex justify-between my-10'>
        {
          records.map((record, index) => (
            <Aboutcard key={index} number={record.number} name={record.name} />
          ))
        }
    </div>
  )
}

export default Homeabout;