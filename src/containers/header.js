import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="http://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
            </a>
            <a className="navbar-item" href="">
              <div>Open Matters</div>
            </a>
            <a className="navbar-item" href="">
              <div>Closed Matters</div>
            </a>

            <button className="button navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
