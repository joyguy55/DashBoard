import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import QuestionsContainer from '../../../components/questions_container'
import HeaderWithTabs from '../../../components/header_with_tabs'
import Form from '../forms/form.js'

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { name: 'Injured Party', isActive: 'is-active'},
        { name: 'Personal Info', isActive: ''},
        { name: 'Insurance Info', isActive: ''},
        { name: 'Financial Info', isActive: ''},
        { name: ' History', isActive: ''},
        { name: 'Judgments', isActive: ''},
      ],
      questions: [
        { name: 'Info'},
        { name: 'Description'}
      ]
    };
  }

  render() {
    return (
      <div className="column is-10">

        <HeaderWithTabs title={'Injured Party'} tabs={this.state.tabs}/>

        <QuestionsContainer questions={this.state.questions}/>

        <Switch>
         <Route path="/MatterSummary" component={Form}/>
        </Switch>

      </div>
    );
  }
}

export default Summary;
