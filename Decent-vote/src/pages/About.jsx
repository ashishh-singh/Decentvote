import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center pt-[100px] pb-12">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-emerald-600 mb-6 text-center">About DecentVote</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to DecentVote, where we are revolutionizing the way people engage in democratic processes. Our mission is to create a transparent and trustworthy voting system that empowers every citizen.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          At DecentVote, we leverage cutting-edge blockchain technology to ensure the integrity and security of every vote cast. Our decentralized platform not only guarantees accuracy but also enhances voter confidence.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our core values are:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li className="mb-2 text-emerald-600">Transparency</li>
          <li className="mb-2">Security</li>
          <li className="mb-2">Inclusion</li>
          <li className="mb-2">Innovation</li>
        </ul>
        <p className="text-lg text-gray-700">
          Join us in making democracy more robust and accessible for everyone. Together, we can shape a better future through DecentVote.
        </p>
      </div>
    </div>
  );
}

export default About;
