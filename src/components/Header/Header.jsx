import React from 'react';
import './Header.css';

const Header = () => {
  const telWebApp = window.Telegram.WebApp;

  const onClose = () => {
    telWebApp.close();
  };


  return (
    <div className={'header'}>
      <Button onClick={onClose}>Close it</Button>
      <span className={'username'}>
        {tg.initDataUnsafe?.user.username}
      </span>
    </div>
  );
};

export default Header;
