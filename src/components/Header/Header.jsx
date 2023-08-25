import React from 'react';
import './Header.css';
import Button from '../Button/Button';
import { useTelegram } from '../hooks/useTelegram';

const Header = () => {
  const { user, onClose, telWebApp } = useTelegram();
  return (
    <div className='header'>
      <Button onClick={onClose}>Close it</Button>

      <span className={'username'}>
        {user?.username}, {telWebApp.initDataUnsafe?.user?.username}
      </span>

    </div>
    
  );
};

export default Header;
