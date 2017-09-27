import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import 'bulma/css/bulma.css'
import './App.scss';

import Header from './containers/header'
import DashBoard from './containers/dash_board/dash_board.js'
import OpenMatters from './containers/open_matters/open_matters.js'
import ClosedMatters from './containers/closed_matters/closed_matters.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>

          <Switch>
            <Route exact path="/" component={DashBoard}/>
            <Route path="/DashBoard" component={DashBoard}/>
            <Route path="/OpenMatters" component={OpenMatters}/>
            <Route path="/ClosedMatters" component={ClosedMatters}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
