import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from './components/hooks/useTelegram';
import Header from './components/Header/Header';

function App() {
  const { telWebApp, onToggleButton } = useTelegram();

  useEffect(() => {
    telWebApp.ready();
  }, []);

  return (
    <div className="App">
      <Header />

      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
