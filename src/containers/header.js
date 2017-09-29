import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="http://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
          </a>

          <Link className="navbar-item" to="/OpenMatters">OpenMatters</Link>
          <Link className="navbar-item" to="/ClosedMatters">ClosedMatters</Link>

          <button className="button navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
