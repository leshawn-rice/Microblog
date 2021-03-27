import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Routes from './Routes';
import './styles/App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
