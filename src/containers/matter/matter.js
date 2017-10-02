import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'

import SideBar from '../../components/sidebar'
import Summary from './categories/summary'
import MatterInfo from './categories/matter_info'
import IncidentInfo from './categories/incident_info'
import InjuredParty from './categories/injured_party'
import InjuryInfo from './categories/injury_info'
import DemandInfo from './categories/demand_info'

class Matter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems : [
        { name: 'Summary',
          isActive: 'is-active',
          path: '/Matter/Summary'
        },
        { name: 'Matter Info',
          isActive: '',
          path: '/Matter/MatterInfo'
        },
        { name: 'Incident Info',
          isActive: '',
          path: '/Matter/IncidentInfo'
        },
        { name: 'Injured Party',
          isActive: '',
          path: '/Matter/InjuredParty'
        },
        { name: 'Injury Info',
          isActive: '',
          path: '/Matter/InjuryInfo'
        },
        { name: 'Demand Info',
          isActive: '',
          path: '/Matter/DemandInfo'
        }
      ]
    };
  }

  setActive(index) {
    const items = this.state.menuItems;
    items.map((item) => { item.isActive = ''})
    items[index].isActive = 'is-active'
    this.setState({  menuItems: items })
  }

  render() {
    return (
      <div className="columns is-gapless">

        <SideBar menuItems={this.state.menuItems}
                 setActive={this.setActive.bind(this)}/>

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
