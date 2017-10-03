import React from 'react';
import { Link } from 'react-router-dom'
import './header_with_tabs.scss'

const HeaderWithTabs = (props) => {
  return (
    <section>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            { props.title }
          </h1>
        </div>
      </div>

      <div className="hero-foot">
        <nav className="tabs is-boxed">
          <div className="container">
            <ul>
             {
               props.tabs.map((tab)=>{
                 return(
                   <li className={tab.isActive}>
                    <Link to={tab.name}>{tab.name}</Link>
                   </li>
                 )
               })
             }
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default HeaderWithTabs;
