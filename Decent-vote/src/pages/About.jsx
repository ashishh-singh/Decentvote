import React from "react";
import AboutImg from "../assets/about.jpg";
import transparentImg from "../assets/polls.gif";
import securityImg from "../assets/security.gif";
import inclusionImg from "../assets/Inclusion.gif";
import innovationImg from "../assets/think.gif";

const values = [
  { name: "Transparency", image: transparentImg },
  { name: "Security", image: securityImg },
  { name: "Inclusion", image: inclusionImg },
  { name: "Innovation", image: innovationImg },
];

const About = () => {
  return (
    <div className="flex justify-between items-center pt-[120px] mb-20 px-20">
      <div className="w-[80%]">
        <h1 className="text-4xl font-bold text-emerald-600 mb-6 text-center">
          About DecentVote
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to DecentVote, where we are revolutionizing the way people
          engage in democratic processes. Our mission is to create a transparent
          and trustworthy voting system that empowers every citizen.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          At DecentVote, we leverage cutting-edge blockchain technology to
          ensure the integrity and security of every vote cast. Our
          decentralized platform not only guarantees accuracy but also enhances
          voter confidence.
        </p>
        <p className="text-lg text-gray-700 mb-4">Our core values are:</p>
        <ul className="text-lg text-gray-700 mb-4 flex flex-wrap justify-center items-center">
          {values.map((value, index) => (
            <li className="mb-2 text-emerald-600 " key={index}>
              <img src={value.image} alt={value.name} className="h-40" />
              <div className="text-center">{value.name}</div>
            </li>
          ))}
        </ul>
        <p className="text-lg text-gray-700 mt-5">
          Join us in making democracy more robust and accessible for everyone.
          Together, we can shape a better future through DecentVote.
        </p>
      </div>
      <div>
        <img src={AboutImg} alt="about" className="h-[400px] w-full" />
      </div>
    </div>
  );
};

export default About;
