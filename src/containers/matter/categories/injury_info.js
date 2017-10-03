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
        { name: 'Injury Info', isActive: 'is-active'},
        { name: 'Impact of Injuries', isActive: ''},
        { name: 'Injury Witness', isActive: ''},
        { name: 'Statements', isActive: ''},
        { name: 'Investigations', isActive: ''},
        { name: 'Conversations', isActive: ''},
        { name: 'Property Damage', isActive: ''},
        { name: 'Appointments', isActive: ''},
        { name: 'Expenses', isActive: ''},
        { name: 'Journal', isActive: ''},
        { name: 'Photos', isActive: ''},
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

        <HeaderWithTabs title={'Injury Info'} tabs={this.state.tabs} />

        <QuestionsContainer questions={this.state.questions}/>

        <Switch>
         <Route path="/MatterSummary" component={Form}/>
        </Switch>

      </div>
    );
  }
}

export default Summary;
