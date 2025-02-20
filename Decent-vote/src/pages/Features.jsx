import React from 'react'
import Card from '../components/Card'

const Features = () => {
  return (
    <div className="grid grid-cols-3 pt-[100px] gap-4 ml-5 mr-5">
        <Card
          title={"College Election"}
          content={
            "DecentVote provides a secure and transparent platform for student council elections. It ensures fairness, trust among students and faculty by leveraging blockchain technology."
          }
        />
        <Card
          title={"School Election"}
          content={
            "DecentVote enhances campus elections by providing a fair and transparent platform. Blockchain technology ensures secure, verifiable voting, fostering trust among students and administration."
          }
        />
        <Card
          title={"Polls"}
          content={
            "DecentVote simplifies opinion polling with a secure and transparent blockchain system. It ensures integrity in data collection, making results reliable and tamper-proof for informed decision-making."
          }
        />
        <Card
          title={"Organization Election"}
          content={
            "DecentVote streamlines internal voting processes for organizations, offering a tamper-proof and auditable system. It enhances decision-making by ensuring every vote is securely recorded and verifiable."
          }
        />
        <Card
          title={"State Election"}
          content={
            "DecentVote modernizes state elections with blockchain-based voting, delivering unmatched security and transparency. It eliminates fraud risks and guarantees accurate, immutable election outcomes."
          }
        />
        <Card
          title={"State Election"}
          content={
            "DecentVote modernizes state elections with blockchain-based voting, delivering unmatched security and transparency. It eliminates fraud risks and guarantees accurate, immutable election outcomes."
          }
        />
      </div>
  )
}

export default Features