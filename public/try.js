import React, { useState, useEffect, useCallback} from 'react';
import { useTelegram } from '../hooks/useTelegram';
import './Form.css';

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
  }, [country, city, subject]);

  useEffect(() => {
    telWebApp.onEvent('mainButtonClicked', onSendData);
    return () => {
      telWebApp.offEvent('mainButtonClicked', onSendData);
    }
  }, [onSendData]);

  useEffect(() => {
    telWebApp.MainButtom.setParams({
      text: 'send text';
    });
  }, []);

  useEffect(() => {
    if (!country || !city) {
      telWebApp.MainButton.hide();
    } else {
      telWebApp.MainButton.show();
    }
  }, [country, city]);

  const onChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const onChangeCity = (event) => {
    setCity(event.target.value);
  }

  const onChangeSubject = (event) => {
    setSubject(event.target.value);
  }

  return (
    <div className="form">
      <h3> Enter yuor details</h3>

      <input className='input'
          type='text'
          placeholder='your country'
          value={country}
          onChange={onChangeCountry}
      />

      <input className='input'
          type='text'
          placeholder='your city'
          value={country}
          onChange={onChangeCity}
      />

      <select className='select' onChange={onChangeSubject}>
        <option value={'physical'}>Physical</option>
        <option value={'legal'}>Legal</option>
      </select>
    </div>
  )

}

export default Form;