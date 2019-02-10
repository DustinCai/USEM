import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  state = {}

  render() {
    return(
      <div className="App-body">
        <div className="App-left">
          <p>
            {// {<input type="text" placeholder="Search..."><input/>}
            }
            <p id="searchName"> Search </p>
            <div id="input_box">
                <input type="text" placeholder=" " id="req-text" onKeydown="AutoFunction();" />
                <button type="button" id="search" onClick="">Click</button>
            </div>
          </p>
        </div>
        <div className="App-right">
          <div className="App-right-top">
            <p className="bioTitle"> ksdfjdsnkjf </p>
            <p className="bioSubtitle"> dkjnsdf </p>
          </div>
          <div className="App-right-bottom">
            <p> More detailed description </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
