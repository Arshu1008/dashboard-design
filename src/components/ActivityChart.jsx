import React from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Card = styled.div`
  background-color: #2d2d3b;
  padding: 20px;
  border-radius: 10px;
  color: white;
`;

const data = {
  labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
  datasets: [
    {
      label: 'Activity',
      data: [1000, 3000, 2000, 4000, 3000, 5000, 4000, 6000, 5000, 7000, 6000],
      backgroundColor: '#4e73df',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function ActivityChart() {
  return (
    <Card>
      <Bar data={data} options={options} />
    </Card>
  );
}

export default ActivityChart;
