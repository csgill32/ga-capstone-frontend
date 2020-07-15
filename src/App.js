import React from 'react';
import Routes from './config/routes';
import NavBar from './components/NavBar/NavBar'
import './App.scss';
import './fontawesome'

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
