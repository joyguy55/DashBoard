import React, { Component } from 'react';
import SideBar from '../components/sidebar.js'
import {
  Route,
  Switch
} from 'react-router-dom'

import Matters from './matters.js'

class OpenMatters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems : [
        {
          name: 'All',
          isActive: '',
          path: 'all'
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
      <div className="columns is-gapless">

       <div className="column is-2">
         <SideBar menuItems={this.state.menuItems}
                  setActive={this.setActive.bind(this)}/>
       </div>

       <div className="column is-10">
        <Matters/>
       </div>

      </div>
    );
  }
}

export default OpenMatters;

//  <Switch>
//   <Route path="/OpenMatters/all" component={AllMatters}/>
//  </Switch>
