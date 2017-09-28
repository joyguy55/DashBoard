import React from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom'

const SideBar = (props) => {
  return (
    <ul className="menu-list">

    <div className="thingy">
      <h3>Some text</h3>
      <p>lorem ipsum. Maybe some random text here for the really really though</p>
    </div>

      {
        props.menuItems.map( (item, index)=>{
          return(
            <li key={index}
                onClick={()=>{props.setActive(index)}}>
                <Link className={item.isActive} to={item.path}>
                 <div>{ item.name }</div>
                </Link>
            </li>
          )
        })
      }
    </ul>
  );
}

export default SideBar;
