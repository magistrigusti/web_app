import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from './components/hooks/useTelegram';

function App() {
  const { telWebApp, onToggleButton } = useTelegram();

  useEffect(() => {
    telWebApp.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
