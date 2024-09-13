import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import LineGraph from './linegraph';
import Map from './map';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <button
        className="mb-6 text-blue-600 flex items-center"
        onClick={() => navigate(-1)}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Back
      </button>
      <h1 className="text-3xl font-bold mb-6">COVID-19 Dashboard</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2 className="text-2xl font-semibold mb-4">Cases Over Time</h2>
        <LineGraph />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Map of COVID-19 Cases</h2>
        <Map />
      </div>
    </div>
  );
};

export default Dashboard;
