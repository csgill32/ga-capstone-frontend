import React from 'react';
import Routes from './config/routes';
import NavBar from './components/NavBar/NavBar'
import './App.scss';
import './fontawesome'

class App extends React.Component {
  state = {
    isLoggedIn: localStorage.getItem('uid') || false,
  }

  setLogin = (bool) => {
    if (!bool) {
      localStorage.removeItem('uid');
    }
    this.setState({ isLoggedIn: bool })
  }

  render() {
    return (
      <div className="App">
        <NavBar setLogin={this.setLogin} isLoggedIn={this.state.isLoggedIn} />
        <main>
          <Routes setLogin={this.setLogin} />
        </main>
      </div>
    );
  }
}

export default App;
