import React from 'react';
import { Line } from 'react-chartjs-2';

interface SparklineProps {
  data: number[];
}

export const Sparkline: React.FC<SparklineProps> = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => index),
    datasets: [{
      label: 'Trend',
      data,
      borderColor: 'blue',
      borderWidth: 2,
      fill: false
    }]
  };

  return <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />;
};
