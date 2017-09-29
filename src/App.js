import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import 'bulma/css/bulma.css'
import './App.scss';

import Header from './containers/header'
import DashBoard from './containers/dash_board.js'
import OpenMatters from './containers/open_matters.js'
import ClosedMatters from './containers/closed_matters.js'
import Matter from './containers/matter/matter.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={DashBoard}/>
            <Route path="/OpenMatters" component={OpenMatters}/>
            <Route path="/ClosedMatters" component={ClosedMatters}/>
            <Route path="/Matter" component={Matter}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
