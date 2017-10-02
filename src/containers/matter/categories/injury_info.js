import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import QuestionsContainer from '../../../components/questions_container'
import HeaderWithTabs from '../../../components/header_with_tabs'
import Form from '../forms/form.js'

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="column is-10">

        <HeaderWithTabs/>

        <QuestionsContainer/>

        <Switch>
         <Route path="/MatterSummary" component={Form}/>
        </Switch>

      </div>
    );
  }
}

export default Summary;
