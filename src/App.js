import React, { Component } from 'react';

import {
  Router
}                               from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MainRoutes from './routes/MainRoute'

const browserHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      
    

    <Router history={browserHistory}>
     <div> <MainRoutes/></div>
      </Router>
      
      )
  }
}


export default App;
