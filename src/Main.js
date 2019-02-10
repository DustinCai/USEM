import React, { Component } from 'react';
import './Main.css';
//import * as main_view from './view/main_view.js';
var main_view = require('./view/main_view.js');


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
                <button type="button" id="search" onClick={main_view.asd}>Click</button>
            </div>
          </p>
        </div>
        <div className="App-right">
          <div className="App-right-top">
            <p className="bioTitle"> I dont know what to put here </p>
            <p className="bioSubtitle"> lmao </p>
            <p>
              <img src={require("./puff.png")} alt="CroppedPhoto" className="croppedPhoto" />
            </p>
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
