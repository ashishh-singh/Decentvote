import React from 'react'
import Card from '../components/Card'

const featuresData = [
  {
    title: "College Election",
    content:
      "DecentVote provides a secure and transparent platform for student council elections. It ensures fairness, trust among students and faculty by leveraging blockchain technology. Teachers can take decision.",
  },
  {
    title: "School Election",
    content:
      "DecentVote enhances campus elections by providing a fair and transparent platform. Blockchain technology ensures secure, verifiable voting, fostering trust among students and administration.",
  },
  {
    title: "Polls",
    content: "DecentVote simplifies opinion polling with a secure and transparent blockchain system. It ensures integrity in data collection, making results reliable and tamper-proof for informed decision-making."
  },
  {
    title: "Organization Election",
    content: "DecentVote streamlines internal voting processes for organizations, offering a tamper-proof and auditable system. It enhances decision-making by ensuring every vote is securely recorded and verifiable."
  },
  {
    title: "Election",
    content: "DecentVote empowers organizations to hold secure and transparent elections. It ensures fairness, trust, and transparency, fostering a democratic process and promoting voter engagement."
  },
  {
    title: "State Election",
    content: "DecentVote empowers organizations to hold secure and transparent elections. It ensures fairness, trust, and transparency, fostering a democratic process and promoting voter engagement." 
  },
]

const Features = () => {
  return (
    <div className="grid grid-cols-3 pt-[100px] gap-4 my-10 mx-5">
      {
        featuresData.map((data, index) => {
          return <Card key={index} title={data.title} content={data.content} />
        })
      }
    </div>
  )
}

export default Features