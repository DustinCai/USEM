import React, { Component } from 'react';
//import Navbar from './navbar';
import './Navbar.css';

class Navbar extends Component {
  state = {}

  render() {
    return(
      <div className="App-header">
        <header>
          <h1 className="App-title">University Second-hand Marketplace</h1>
        </header>
        <div className="navbar-navbar-light-bg-light">
          <a className="Home" href="#">Home</a>
          <a className="About" href="#">About</a>
          <a className="FAQ" href="#">FAQ</a>
          <a className="Contact" href="#">Contact</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
