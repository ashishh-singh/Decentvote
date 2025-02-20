import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2'; // For bar chart visualization
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ResultPage = () => {
  const [electionId, setElectionId] = useState('');
  const [candidates] = useState([
    { name: 'Candidate A', votes: 120 },
    { name: 'Candidate B', votes: 85 },
    { name: 'Candidate C', votes: 60 },
    { name: 'Candidate D', votes: 30 },
  ]);

  const [error, setError] = useState('');

  // Static data for the bar chart
  const data = {
    labels: candidates.map((candidate) => candidate.name),
    datasets: [
      {
        label: 'Votes',
        data: candidates.map((candidate) => candidate.votes),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const handleElectionIdChange = (e) => {
    setElectionId(e.target.value);
  };

  const handleSearch = () => {
    if (electionId === '') {
      setError('Please enter a valid Election ID.');
    } else {
      setError('');
      // Add logic to fetch results based on the electionId if necessary
      console.log('Searching for election ID:', electionId);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">Election Results</h2>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Enter the Election ID to see the results of the ongoing election.
      </p>

      {/* Election ID Input Field */}
      <div className="w-full max-w-xs mb-6">
        <input
          type="text"
          placeholder="Enter Election ID"
          value={electionId}
          onChange={handleElectionIdChange}
          className="w-full p-3 border border-gray-300 rounded-lg text-lg mb-4"
        />
        <button
          onClick={handleSearch}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-200"
        >
          Search
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      {/* Election Results Chart */}
      <div className="max-w-4xl w-full mt-8">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Election Results Overview</h3>
          <p className="text-lg text-gray-700">
            The results of the election are as follows. The chart below shows the total number of votes
            each candidate has received in this election.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <Bar data={data} options={{ responsive: true }} />
        </div>
      </div>

      {/* Election Overview Text */}
      <div className="mt-8 text-center text-gray-600">
        <p className="text-lg">Election Overview:</p>
        <p className="mt-4">
          The election process allows registered voters to cast their votes for the candidates they
          support. The results are based on the total votes each candidate receives. The highest votes
          indicate the winning candidate.
        </p>
      </div>
    </div>
  );
};

export default ResultPage;
