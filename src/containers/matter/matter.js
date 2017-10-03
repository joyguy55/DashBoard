import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'

import SideBar from '../../components/sidebar'

import Summary from './categories/summary/summary'
import MatterInfo from './categories/matterinfo/matterInfo'
import IncidentInfo from './categories/incidentinfo/incidentInfo'
import InjuredParty from './categories/injuredparty/injuredParty'
import InjuryInfo from './categories/injuryinfo/injuryInfo'
import DemandInfo from './categories/demandinfo/demandInfo'

class Matter extends Component {
  constructor() {
   super();
    this.state = {
      menuItems : [
        { name: 'Summary',
          path: '/Matter/Summary'
        },
        { name: 'Matter Info',
          path: '/Matter/MatterInfo'
        },
        { name: 'Incident Info',
          path: '/Matter/IncidentInfo'
        },
        { name: 'Injured Party',
          path: '/Matter/InjuredParty'
        },
        { name: 'Injury Info',
          path: '/Matter/InjuryInfo'
        },
        { name: 'Demand Info',
          path: '/Matter/DemandInfo'
        }
      ]
    };
  }

  render() {
    return (
      <div className="columns is-gapless">

        <SideBar menuItems={this.state.menuItems} />

        <Switch>
         <Route path="/Matter/Summary" component={Summary}/>
         <Route path="/Matter/MatterInfo" component={MatterInfo}/>
         <Route path="/Matter/IncidentInfo" component={IncidentInfo}/>
         <Route path="/Matter/InjuredParty" component={InjuredParty}/>
         <Route path="/Matter/InjuryInfo" component={InjuryInfo}/>
         <Route path="/Matter/DemandInfo" component={DemandInfo}/>
        </Switch>

      </div>
    );
  }
}

export default Matter;
