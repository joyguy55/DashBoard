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
        { name: 'Injury',
          isActive: '',
          path: 'injury'
        },
        { name: 'Thing',
          isActive: '',
          path: 'thing'
        },
        { name: 'Thing2',
          isActive: '',
          path: 'thing2'
        },
        { name: 'Thing3',
          isActive: '',
          path: 'thing3'
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
           <Route path="/Matter" component={Form}/>
          </Switch>

          <Switch>
           <Route path="/Matter" component={Overview}/>
          </Switch>

        </div>

      </div>
    );
  }
}

export default Matter;
