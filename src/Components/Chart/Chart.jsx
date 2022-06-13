import React, { useCallback, useMemo, memo } from "react";
import './Chart.scss'
import { Bar, Line } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS} from 'chart.js/auto';
import vars from  '../../Variables.scss';


export const Chart = memo(({chartData}) => {
  const {chartLabels, chartValues, chartType} = chartData;


  const stringToArray = useCallback((str) => {
    return str.split(/,| /);
  }, []);

  const setFontSize = () => {
    return document.body.offsetWidth / 50;
  };

  const preparedLabels = stringToArray(chartLabels);
  const preparedValues = stringToArray(chartValues);
  const textColor =  vars.colorLight;
  const textColorHover =  vars.colorLightHover;


  const createRandomColorsArray = useCallback((labelsArray) => {
    const resArr = [];
    const transparentStep = 0.5 / labelsArray.length;
    let transpValue = 0.1 + transparentStep;

    const randomHslColor = (Math.random() * 360);
    const createColor = (transparentValue) => {
      return `hsla(${(randomHslColor)}, 100%, 50%, ${transparentValue})`;
    };

    labelsArray.forEach(() => {
      resArr.push(createColor(transpValue));
      transpValue += transparentStep;
    });

    return resArr;
  }, []);

  const preparedData = useMemo(() => {
    return {
      labels: preparedLabels,
      datasets: [{
        label: "Test",
        data: preparedValues,       
        backgroundColor: createRandomColorsArray(preparedLabels),
        hoverBorderColor: textColorHover,
        borderColor: textColor,
        fill: true,
        borderWidth: 3,
        borderRadius: 5,
        tension: 0.5,
      }],
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preparedLabels, preparedValues, textColor, textColorHover]);

  const customOptions = {
    scales: {
      y: {
        grid: {
          color: textColor,
        },
        beginAtZero: true,
        max: Math.ceil(Math.max(...preparedValues) * 1.1), 
        ticks: {
          font: {
            size: setFontSize()
          },
          color: textColor,
        }
      },
      x: {
        grid: {
          color: textColor,
        },
        ticks: {
          font: {
            size: setFontSize(),
          },
          color: textColor,
        }
      }
    },

    layout: {
      padding: setFontSize(),
    },

    elements: {
      line: {
        fill: false
      }
    },

    plugins: {
      legend: {
        labels: {
          font: {
              size: setFontSize(),
          },
          color: textColor,
        }
      }
    }
  };

  switch (chartType) {
    case 'bar':
      return (
        <div className="chart">
          <Bar data={preparedData} options={customOptions}/>
        </div>
      );
    case 'line':
      return (
        <div className="chart">
          <Line data={preparedData} options={customOptions}/>
        </div>
      );
    default:
      return (
        <h2>Please select chart type</h2>
      );
  };
});
