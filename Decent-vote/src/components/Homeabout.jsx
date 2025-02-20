import React from 'react'
import Aboutcard from './Aboutcard'

function Homeabout() {
  return (
    <div className='flex justify-between m-5'>
        <Aboutcard
        number={23}
        name={"Onging election"}/>
        <Aboutcard
        number={"230+"}
        name={"Completed Elections"}/>
        <Aboutcard
        number={13}
        name={"Upcoming Polls"}/>
        <Aboutcard
        number={3}
        name={"Ongoing Dataroom"}/>
        <Aboutcard
        number={"320+"}
        name={"Completed Dataroom"}/>
        {/* <Aboutcard
        number={23}
        name={"Onging election"}/> */}
    </div>
  )
}

export default Homeabout;