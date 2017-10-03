import React from 'react';
import './sidebar.scss';
import { NavLink } from 'react-router-dom'

const SideBar = (props) => {
  return (
    <div className="column is-2">
      <ul className="menu-list">

      <div className="thingy">
        <h3>Some text</h3>
        <p>lorem ipsum. Possibly info regarding current case that way I know where I am at :)</p>
      </div>
        {
          props.menuItems.map( (item, index)=>{
            return(
              <li key={index}>
                  <NavLink activeClassName="is-active" to={item.path}>
                   <div>{ item.name }</div>
                  </NavLink>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default SideBar;
