import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'

import SideBar from '../../components/sidebar'
import HeaderWithTabs from '../../components/header_with_tabs'
import Overview from './subb/overview'
import Form from './suba/subForm.js'

class Matter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems : [
        { name: 'Summary',
          isActive: '',
          path: ''
        },
        { name: 'Matter Info',
          isActive: '',
          path: ''
        },
        { name: 'Incident Info',
          isActive: '',
          path: ''
        },
        { name: 'Injured Party',
          isActive: '',
          path: ''
        },
        { name: 'Injury Info',
          isActive: '',
          path: ''
        },
        { name: 'Demand Info',
          isActive: '',
          path: ''
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

        <div className="column is-10">

          <HeaderWithTabs/>

          <Switch>
           <Route path="/Matter" component={Overview}/>
          </Switch>

          <Switch>
           <Route path="/Matter" component={Form}/>
          </Switch>

        </div>

      </div>
    );
  }
}

export default Matter;
