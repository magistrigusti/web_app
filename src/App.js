import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useTelegram } from './components/hooks/useTelegram';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';

function App() {
  const { telWebApp, onToggleButton } = useTelegram();

  useEffect(() => {
    telWebApp.ready();
  }, [telWebApp]);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'/form'} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
