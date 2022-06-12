import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as chartJS} from 'chart.js/auto';

export const BarChart = ({preparedData}) => {

  return (
    <Bar data={preparedData} />
  );
}