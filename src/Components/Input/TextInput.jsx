import React, { useCallback, useState, memo } from 'react';
import './TextInput.scss';

export const TextInput = memo(({handleChange, inputName, axis}) => {
  const [value, setValue] = useState('');

  //I don't understand why it works weird :)
  const convertString = useCallback((string) => {
    // return string.split(/(?:,| )+/).join(', ');
    return string;
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    setValue(convertString(value));
    handleChange(value);
  }, [convertString, handleChange, value]);

  return (  
    <>
      <h3 className="input__title">{`${axis} axis ${inputName}`}</h3>
      <form className="input__form" onSubmit={handleSubmit}>
        <input
          className="input__body"
          required
          type="text"
          name={inputName} 
          value={value}
          onChange={event =>setValue(event.target.value)}
          onBlur={handleSubmit}
          placeholder={`Please input chart ${inputName}`}
          autoComplete="off"
        />
      </form> 
    </>
  )
});