import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import QuestionsContainer from '../../../components/questions_container'
import HeaderWithTabs from '../../../components/header_with_tabs'
import Form from '../forms/form.js'

const InjuredParty = () => {

   const tabs = [
    'Injured Party',
    'Personal Info',
    'Insurance Info',
    'Financial Info',
    'History',
    'Judgments'
   ]

   return (
     <div className="column is-10">

       <HeaderWithTabs title={'Injured Party'} tabs={this.state.tabs}/>

       <QuestionsContainer />

       <Switch>
        <Route path="/MatterSummary" component={Form}/>
       </Switch>

     </div>
   );
}

export default InjuredParty;
