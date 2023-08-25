import React, { useEffect } from 'react';
import './App.css';

const telWebApp = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    telWebApp.ready();
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
