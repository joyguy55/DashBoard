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
        { name: 'General', isActive: 'is-active'},
        { name: 'Attorney Info', isActive: ''},
        { name: 'At Fault Party', isActive: ''},
        { name: 'Correspondence', isActive: ''},
        { name: 'Liens & Subrogation', isActive: ''},
        { name: 'Case Expenses', isActive: ''},
        { name: 'Agreements', isActive: ''},
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

        <HeaderWithTabs title={'Matter Info'} tabs={this.state.tabs}/>

        <QuestionsContainer questions={this.state.questions}/>

        <Switch>
         <Route path="/MatterSummary" component={Form}/>
        </Switch>

      </div>
    );
  }
}

export default Summary;
