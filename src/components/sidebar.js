import React from 'react';
import './sidebar.scss';

const SideBar = (props) => {
  return (
    <div>
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
                  <a className={item.isActive}><div>{ item.name }</div></a>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default SideBar;
