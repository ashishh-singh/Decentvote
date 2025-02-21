import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const ResultPage = () => {
  const [uniqueId, setUniqueId] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dataBar = {
    labels: candidates.map((candidate) => candidate.memberName),
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

  const dataPie = {
    labels: candidates.map((candidate) => candidate.memberName),
    datasets: [
      {
        label: 'Votes',
        data: candidates.map((candidate) => candidate.votes),
        backgroundColor: [
          'rgba(75, 192, 192, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 159, 64, 0.7)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleUniqueIdChange = (e) => {
    setUniqueId(e.target.value);
  };

  const handleSearch = async () => {
    if (uniqueId === '') {
      setError('Please enter a valid Unique ID.');
      return;
    }
    
    setError('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/api/result', { uniqueId }, { withCredentials: true });

      if (response.data.success) {
        setCandidates(response.data.candidates);
      } else {
        setError('No results found for this Unique ID.');
      }
    } catch (err) {
      setError('There was an error fetching the election results. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">Election Results</h2>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Enter the Unique ID to see the results of the ongoing election.
      </p>

      <div className="w-full max-w-xs mb-6">
        <input
          type="text"
          id="uniqueId"
          placeholder="Enter Unique ID"
          value={uniqueId}
          onChange={handleUniqueIdChange}
          className="w-full p-3 border border-gray-300 rounded-lg text-lg mb-4"
        />
        <button
          onClick={handleSearch}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-200"
        >
          {isLoading ? 'Loading...' : 'Search'}
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      {candidates.length > 0 && (
        <div className="max-w-4xl w-full mt-8">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Election Results Overview</h3>
            <p className="text-lg text-gray-700">
              The results of the election are as follows. The charts below show the total number of votes
              each candidate has received in this election.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mt-6 mb-8">
            <h4 className="text-xl font-semibold text-blue-600 mb-4">Bar Chart: Votes Overview</h4>
            <Bar data={dataBar} options={{ responsive: true }} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <h4 className="text-xl font-semibold text-blue-600 mb-4">Pie Chart: Votes Distribution</h4>
            <Pie data={dataPie} options={{ responsive: true }} />
          </div>
        </div>
      )}

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
