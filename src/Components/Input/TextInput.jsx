import React, { useCallback, useState, memo } from 'react';
import './TextInput.scss';

export const TextInput = memo(({handleChange, inputName, axis}) => {
  const [value, setValue] = useState('');

  const prepareString = useCallback((string) => {
    const strArr =  string.split(' ').join(',').split(',');
    const resArr = strArr.filter(el => !!el);
    return resArr.join(',');
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const preparedValue = prepareString(value);
    setValue(preparedValue);
    handleChange(preparedValue);
  }, [handleChange, prepareString, value]);

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