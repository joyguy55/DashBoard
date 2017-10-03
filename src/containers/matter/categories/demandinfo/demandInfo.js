import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import QuestionsContainer from '../../../../components/questions_container'
import HeaderWithTabs from '../../../../components/header_with_tabs'
import Form from '../forms/form.js'

const DemandInfo = () => {

   const tabs = [
    'Demand Info',
    'Legal Research',
    'Legal Analysis'
   ]

   return (
     <div className="column is-10">

       <HeaderWithTabs title={'Demand Info'} tabs={this.tabs}/>

       <QuestionsContainer />

       <Switch>
        <Route path="/MatterSummary" component={Form}/>
       </Switch>

     </div>
   );
 }


export default DemandInfo;
