import React, { Component } from 'react';
import Navbar from './Navbar';
import './App.css';

import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
