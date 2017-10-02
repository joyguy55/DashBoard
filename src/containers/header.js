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
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/OpenMatters">OpenMatters</Link>
            <Link className="navbar-item" to="/ClosedMatters">ClosedMatters</Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">

                <p className="control">
                  <a className="bd-tw-button button is-info">Create Matter</a>
                </p>

                <div className="navbar-item has-dropdown is-active">
                  <a className="navbar-link">
                    My Account
                  </a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item">
                      Profile
                    </a>
                    <a className="navbar-item is-active">
                      Password
                    </a>
                    <a className="navbar-item">
                      Payment
                    </a>
                    <a className="navbar-item">
                      Users
                    </a>
                    <a className="navbar-item">
                      Sign Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Header;
