import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [subject, setSubject] = useState('physical');

  const onChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const onChangeCity = (event) => {
    setCity(event.target.value);
  };

  const onChangeSubject = (event) => {
    setSubject(event.target.value);
  }

  return (
    <div className="form">
      <h3>Enter your details</h3>
    
      <input className="input" 
          type="text" 
          placeholder="Country" 
          value={country}
          onChange={onChangeCountry}
      />
      <input classname="input" 
          type="text" 
          placeholder="City"
          value={city}
          onChange={onChangeCity}
      />

      <select className="select" onChange={onChangeSubject}>
        <option value={'physical'}>Phisical</option>
        <option value={'legal'}>Legal</option>
      </select>
    </div>
  );
};

export default Form;