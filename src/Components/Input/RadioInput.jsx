import React, { useState, useEffect, memo } from 'react';
import './RadioInput.scss';

export const RadioInput = memo(({handleChange}) => {
  const [value, setValue] = useState('bar');

  const handleChangeRadio = (event) => {
    setValue(event.target.value)
    
    console.log(`RadioInput submit ${value}`)
  };

  useEffect(() => {
    handleChange(value)
  }, [handleChange, value])

  console.log(`RadioInput render ${value}`)

  return (  
    <div className="radio">
      <form className="radio__form">
      <label className="radio__label">
        <input
          className="radio__input"
          type="radio"
          name="type"
          value="bar"
          checked={value === 'bar'}
          onChange={handleChangeRadio}
        />
        <span className="radio__name">Bar Chart</span> 
      </label>
      <label className="radio__label">
        <input
          className="radio__input"
          type="radio"
          name="type"
          value="line"
          checked={value === 'line'}
          onChange={handleChangeRadio}
        />
        <span className="radio__name">Line Chart</span> 
      </label>
      </form>
    </div>
  )
});