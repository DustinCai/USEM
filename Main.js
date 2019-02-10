import React, { Component } from 'react';
import './Main.css';
var main_view = require('./view/main_view.js');


class Main extends Component {
  render() {
    return(
      <div className="App-body">
          <div className="App-top">
            <div id = "searchBar">
                <p id="searchName"> Search </p>
                <div id="input_box">
                    <input type="text" placeholder=" " id="req-text"/>
                    <button type="button" id="search" onClick={main_view.asd}>Click</button>
                </div>
            </div>

            <div id = "searchList">
            </div>

            <p className="bioTitle"> I dont know what to put here </p>
            <p className="bioSubtitle"> lmao </p>
            <p>
              <img src={require("./puff.png")} alt="CroppedPhoto" className="croppedPhoto" />
            </p>
          </div>
      </div>
    );
  }
}

export default Main;
