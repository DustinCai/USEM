import React, { Component } from 'react';

import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Submit extends Component {
constructor(props){
    super(props);
    this.routeChange = this.routeChange.bind(this);
}
    routeChange(){
        let path = './submit';
        this.props.history.push(path);
        }
    render() { return (
		<div>                   
			 <button onClick={this.routeChange}> Submit </button>
		</div>
    );
  }
}

 export default withRouter(Submit);