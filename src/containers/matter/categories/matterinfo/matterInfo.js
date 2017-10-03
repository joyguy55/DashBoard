import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import QuestionsContainer from '../../../../components/questions_container'
import HeaderWithTabs from '../../../../components/header_with_tabs'
import Form from '../forms/form.js'

const MatterInfo = () => {

   const tabs = [
     'General',
     'Attorney Info',
     'At Fault Party',
     'Correspondence',
     'Liens & Subrogation',
     'Case Expenses',
     'Agreements',
   ]

   return (
     <div className="column is-10">

       <HeaderWithTabs title={'Matter Info'} tabs={this.state.tabs}/>

       <QuestionsContainer />

       <Switch>
        <Route path="/MatterSummary" component={Form}/>
       </Switch>

     </div>
   );
}

export default MatterInfo;
