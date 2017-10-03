import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import QuestionsContainer from '../../../../components/questions_container'
import HeaderWithTabs from '../../../../components/header_with_tabs'
import Form from '../forms/form.js'

const InjuryInfo = () => {

   const tabs = [
     'Injury Info',
     'Impact of Injuries',
     'Injury Witness',
     'Statements',
     'Investigations',
     'Conversations',
     'Property Damage',
     'Appointments',
     'Expenses',
     'Journal',
     'Photos',
   ]

   return (
     <div className="column is-10">

       <HeaderWithTabs title={'Injury Info'} tabs={this.state.tabs} />

       <QuestionsContainer />

       <Switch>
        <Route path="/MatterSummary" component={Form}/>
       </Switch>

     </div>
   );
}

export default InjuryInfo;
