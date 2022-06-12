import React, { useCallback, useMemo, memo } from "react";
// import { BarChart } from "./BarChart";
// import { Chart, LineController, LineElement, PointElement, LinearScale, Title } from "chart.js";
// Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS} from 'chart.js/auto';
// ChartJS.register();

export const Chart = memo(({chartData}) => {
  const {chartLabels, chartValues, chartType} = chartData;
  
  // const [preparedData, setPreparedData] = useState([]);

  const stringToArray = useCallback((str) => {
    return str.split(/,| /);
  }, []);

  const preparedData = useMemo(() => {
    return {
      labels: stringToArray(chartLabels),
      datasets: [{
        label: "Test1",
        data: stringToArray(chartValues),
        backgroundColor: ["green", "blue"],
        borderColor: "red",
        borderWidth: 2,
      }],
    }
  }, [chartLabels, chartValues, stringToArray])

  console.log(`Chart,render type-${chartType}`);


  switch (chartType) {
    case 'bar':
      return (
        <div className="chart__bar">
          <Bar data={preparedData}/>
          {console.log(`Call bar ${preparedData}`)}
        </div>
      )
    case 'line':
      return (
        <div className="chart__line">
          <Line data={preparedData}/>
          {console.log(`Call line ${preparedData}`)}
        </div>
      )
    default:
      return (
        <h2>Default chart</h2>
      ) 
  }
})