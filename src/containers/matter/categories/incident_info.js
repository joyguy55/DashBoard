import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import QuestionsContainer from '../../../components/questions_container'
import HeaderWithTabs from '../../../components/header_with_tabs'
import Form from '../forms/form.js'

class IncidentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { name: 'Incident Info', isActive: 'is-active'},
        { name: 'Collision Report', isActive: ''},
        { name: 'Circumstance\'s', isActive: ''},
        { name: 'Timeline', isActive: ''},
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

        <HeaderWithTabs title={'Incident Info'} tabs={this.state.tabs} />

        <QuestionsContainer questions={this.state.questions}/>

        <Switch>
         <Route path="/Matter/IncidentInfo" component={Form}/>
        </Switch>

      </div>
    );
  }
}

export default IncidentInfo;
