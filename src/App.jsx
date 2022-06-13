import React, { useState } from 'react';
import './App.scss';
import { Chart } from './Components/Chart/Chart';
import { TextInput } from './Components/Input/TextInput';
import { RadioInput } from './Components/Input/RadioInput';

const App = () => {

  const[chartLabels, setChartLabels] = useState('');
  const[chartValues, setChartValues] = useState('');
  const[chartType, setChartType] = useState('bar');

  console.log(`App, render,type-${chartType}`)

  return (
    <div className="page">
      <div className="page__inputs">
        <TextInput handleChange={setChartLabels} inputName={'Labels'} axis={'X'}/>
        <TextInput handleChange={setChartValues} inputName={'Values'} axis={'Y'}/>
      </div>
    
      {chartLabels.length > 0 && chartValues.length > 0
      ? <Chart chartData={{
          chartLabels: chartLabels,
          chartValues: chartValues,
          chartType: chartType,
        }}/>
      : <h2 className="page__title">Please type labels, default values is 0.</h2>}
      <div className="page__inputs">
        <RadioInput handleChange={setChartType} />
      </div>    
  </div>
  );
}

export default App;
