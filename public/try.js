import React, { useState, useEffect } from 'react';
import { useTelegram } from '../hooks/useTelegram';
import './From.css';

const Form = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [subject, setSubject] = useState('physical');
  const { telWebApp } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      country,
      city,
      subject
    }
    telWebApp.sendData(JSON.stringify(data));
  }, []);

  useEffect(() => {
    telWebApp.onEvent('mainButtonClicked', onSendData);
    return () => {
      telWebApp.offEvent('mainButtonClicked', onSendData);
    }
  }, []);

  useEffect(() => {
    telWebApp.mainButton.setParams({
      text: 'send text'
    })
  }, []);

  useEffect(() => {
    if(!country || !city) {
      telWebApp.MainButton.hide();
    } else {
      telWebApp.MainButton.show();
    }
  }, [country, city]);

  const onChangeCountry = (event) => {
    setCountry(event.targrt.value);
  };

  const onChangeCity = (event) => {
    setCity(event.targrt.value);
  };

  const onChangeSubject = (event) => {
    setSubject(event.target.value);
  };

  return (
    <div className="form">
      <h3>Enter your details</h3>

      <input className="input"
          type="text"
          placeholder='Country'
          value={country}
          onChange={onChangeCountry}
      />

      <input className="input"
          type='text'
          placeholder="City"
          value={city}
          onChange={onChangeCity}
      />

      <select className="select" onChange={onChangeSubject}>
        <option value={'physical'}>Physical</option>
        <option value={'legal'}>Legal</option>
      </select>

    </div>
  )

}

export default Form;