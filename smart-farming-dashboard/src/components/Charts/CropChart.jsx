import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const CropChart = ({ data = { labels: [], currentValues: [], idealValues: [] } }) => {
  if (!data || !data.labels) {
    return <div>No data available for crop chart.</div>;
  }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Current Values',
        data: data.currentValues,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Ideal Values',
        data: data.idealValues,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Crop Monitoring Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default CropChart;