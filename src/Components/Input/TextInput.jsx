import React, { useCallback, useState, memo } from 'react';

export const TextInput = memo(({handleChange, inputName}) => {
  const [value, setValue] = useState('');

  const convertString = useCallback((string) => {
    // return string.split(/,| /).join(', ');
    // return string.split(/(?:,| )+/).join(', ');
    // return string.split(/[ .,]+/).join(', ');
    return string;
  }, [])

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    setValue(convertString(value));
    handleChange(value);
    console.log(`TextInput ${inputName} submit ${value}`)
  }, [convertString, handleChange, inputName, value]);


  console.log(`TextInput render ${inputName}`)

  return (  
    <form onSubmit={handleSubmit}>
      <input
        className="form__input"
        required
        type="text"
        name={inputName} 
        value={value}
        onChange={event =>setValue(event.target.value)}
        onBlur={handleSubmit}
        placeholder={`Please input chart${inputName}`}
        autoComplete="off"
      />
    </form> 
  )
});