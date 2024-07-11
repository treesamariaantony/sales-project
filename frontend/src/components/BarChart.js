
import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.title),
    datasets: [
      {
        label: 'Price',
        data: data.map(d => d.price),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Stock',
        data: data.map(d => d.stock),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
