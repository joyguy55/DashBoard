import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import QuestionsContainer from '../../../components/questions_container'
import HeaderWithTabs from '../../../components/header_with_tabs'
import Form from '../forms/form.js'

class DemandInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { name: 'Demand Info', isActive: 'is-active'},
        { name: 'Legal Research', isActive: ''},
        { name: 'Legal Analysis', isActive: ''},
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

        <HeaderWithTabs title={'Demand Info'} tabs={this.state.tabs}/>

        <QuestionsContainer questions={this.state.questions}/>

        <Switch>
         <Route path="/MatterSummary" component={Form}/>
        </Switch>

      </div>
    );
  }
}

export default DemandInfo;
