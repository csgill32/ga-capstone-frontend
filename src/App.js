import React from 'react';
import Routes from './config/routes';
import NavBar from './components/NavBar/NavBar'
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
