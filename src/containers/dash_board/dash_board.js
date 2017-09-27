import React, { Component } from 'react';
import SideBar from '../../components/sidebar.js'
// import './header.css';


class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems : [
        { name: 'Ready',
          isActive: '',
        },
        { name: 'Pending',
          isActive: '',
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
      </div>
    );
  }
}

export default DashBoard;
