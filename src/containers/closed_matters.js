import React, { Component } from 'react';
import SideBar from '../components/sidebar.js'

class ClosedMatters extends Component {
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
         path: 'OpenMatters/ready'
       },
       { name: 'Pending',
         isActive: '',
         path: 'OpenMatters/pending'
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
      </div>
    );
  }
}

export default ClosedMatters;
