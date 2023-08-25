import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className="form">
      <h3>Enter your details</h3>
    
      <input className="input" type="text" placeholder="Country" />
      <input classname="input" type="text" placeholder="Street" />

      <select className="select">
        <option value={'physical'}>Phisical</option>
        <option value={'legal'}>Legal</option>
      </select>
    </div>
  );
};

export default Form;