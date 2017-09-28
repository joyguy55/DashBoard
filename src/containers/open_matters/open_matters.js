import React, { Component } from 'react';
import SideBar from '../../components/sidebar.js'
import {
  Route,
  Switch
} from 'react-router-dom'

import AllMatters from './all_matters.js'

class OpenMatters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems : [
        {
          name: 'All',
          isActive: '',
          path: 'OpenMatters/all'
        },
        { name: 'Ready',
          isActive: '',
          path: 'ready'
        },
        { name: 'Pending',
          isActive: '',
          path: 'pending'
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
      <div>
       <SideBar menuItems={this.state.menuItems}
                setActive={this.setActive.bind(this)}/>

       <Switch>
        <Route path="/OpenMatters/all" component={AllMatters}/>
       </Switch>
      </div>
    );
  }
}

export default OpenMatters;
