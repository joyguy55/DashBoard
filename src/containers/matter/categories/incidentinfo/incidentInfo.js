import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import QuestionsContainer from '../../../components/questions_container'
import HeaderWithTabs from '../../../components/header_with_tabs'
import Form from '../forms/form.js'

const IncidentInfo = () => {

  const tabs = [
    'Incident Info',
    'Collision Report',
    'Circumstance\'s',
    'Timeline',
  ]

  return (
    <div className="column is-10">

      <HeaderWithTabs title={'Incident Info'} tabs={this.state.tabs} />

      <QuestionsContainer />

      <Switch>
       <Route path="/Matter/IncidentInfo" component={Form}/>
      </Switch>

    </div>
  );

}

export default IncidentInfo;
