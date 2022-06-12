import React, { useState } from 'react';
import { Chart } from './Components/Chart/Chart';
import { TextInput } from './Components/Input/TextInput';
import { RadioInput } from './Components/Input/RadioInput';

const App = () => {

  // const initialChartData = {
  //   chartLabels: '',
  //   chartValues: '',
  //   chartType: 'bar',
  // }

  // const [chartData, setChartData] = useState(initialChartData);
  const[chartLabels, setChartLabels] = useState('');
  const[chartValues, setChartValues] = useState('');
  const[chartType, setChartType] = useState('bar');
  
  

  // const handleChange = useCallback((name, value) => {
  //   setChartData({...chartData, [name]: value})
  //   console.log(`App, change,type-${chartData.chartType}, labels-${chartData.chartLabels}, values-${chartData.chartValues}`)
  // },[chartData]);

  console.log(`App, render,type-${chartType}`)

  return (
    <>
      <TextInput handleChange={setChartLabels} inputName={'Labels'} />
      <TextInput handleChange={setChartValues} inputName={'Values'} />

      {chartLabels.length > 0 && chartValues.length > 0
      ? <Chart chartData={{
          chartLabels: chartLabels,
          chartValues: chartValues,
          chartType: chartType,
        }}/>
      : <h2>Please type labels, default values is 0</h2>}

      <RadioInput handleChange={setChartType} />
  </>
  );
}

export default App;
