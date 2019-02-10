import React, { Component } from 'react';
import './Main.css';
import Submit from './submit';
var main_view = require('./view/main_view.js');

class Main extends Component {
  render() {
    return(
      <div className="App-body">
          <div className="App-top">
            <div id = "searchBar">
                <div class="flexbox">
  <div class="search">
    <div>
      <input type="text" placeholder="       Search" required></input>
    </div>
  </div>
</div>
            </div>


            <div id = "searchList">
                <div id = "list">
  <ul>
    <li>
      <img id = "textbook" src="https://gradeslam.org/blog_images/207/change.jpg"/>
      <h3><b>Chemistry</b></h3>
      <p><em>Edition:Chang, Raymond, and Kenneth Goldsby. Chemistry, AP Edition. McGraw-Hill.</em></p>
    </li>
      
    <li>
      <img id = "textbook" src="https://static1.fjcdn.com/comments/Here+is+the+front+to+my+chem+textbook+i+was+_97d14fefe3a496b3bb8ebade719a34b7.jpg" />
      <h3><b>Chemistry</b></h3>
      <p><em> Edition:Oxtoby, David, H. Pat Gillis, and Alan Campion. Principles of Modern Chemistry. Cengage Learning.</em></p>
    </li>
    <li>
      <img  id = "textbook" src="https://images-na.ssl-images-amazon.com/images/I/51nYHC6fluL._SX374_BO1,204,203,200_.jpg" />
      <h3><b>Economics</b></h3>
      <p><em>Editon:eBook: Principles of Economics, 7th Edition.</em></p>
    </li>
 
    <li>
      <img  id = "textbook" src="https://www.curriculumexpress.com/wp-content/uploads/2011/08/p-10195-Economics.jpg" />
      <h3><b>Economics</b></h3>
      <p><em>Edition:12th Media Services, 2017</em></p>
    </li>

    <li>
      <img  id = "textbook" src="https://www.bestpub.com/media/com_hikashop/upload/tcwc-3d-cover.png" />
      <h3><b> World Culture and Geography</b></h3>
      <p> <em> Edition:Merry E. Wiesner-Hanks, Patricia Buckley Ebrey, et al. | Sep 22, 2017</em></p>
    </li>
  </ul>
</div>
            </div>
          </div>
      </div>
    );
  }
}

export default Main;

