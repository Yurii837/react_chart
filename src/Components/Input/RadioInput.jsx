import React, { useCallback, useState, memo } from 'react';

export const RadioInput = memo(({handleChange}) => {
  const [value, setValue] = useState('bar');

  const handleChangeRadio = useCallback((event) => {
    setValue(event.target.value)
    handleChange(value)
    console.log(`RadioInput submit ${value}`)
  }, [handleChange, value])

  console.log(`RadioInput render ${value}`)

  return (  
    <>
      <label>
        <input
          type="radio"
          name="type"
          value="bar"
          checked={value === 'bar'}
          onChange={handleChangeRadio}
        />
        Bar Chart
      </label>
      <label>
        <input
          type="radio"
          name="type"
          value="line"
          checked={value === 'line'}
          onChange={handleChangeRadio}
        />
        Line Chart
      </label>
    </>
  )
});