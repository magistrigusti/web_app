import React, { useEffect } from 'react';
import './App.css';

const telegramWebApp = window.Telegram.WebApp;


function App() {

  const onClose = () => {
    telegramWebApp.close();
  };

  useEffect(() => {
    telegramWebApp.ready();
  }, []);

  return (
    <div className="App">
      App

      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
