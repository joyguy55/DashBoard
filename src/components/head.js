import React from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom'

const Head = (props) => {
  return (
    <section>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Overview
          </h1>
        </div>
      </div>

      <div className="hero-foot">
        <nav className="tabs is-boxed">
          <div className="container">
            <ul>
              <li className="is-active"><a>Overview</a></li>
              <li><a>Modifiers</a></li>
              <li><a>Grid</a></li>
              <li><a>Elements</a></li>
              <li><a>Components</a></li>
              <li><a>Layout</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Head;
