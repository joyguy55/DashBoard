import React, { Component } from 'react';
import Table from '../../components/table.js'

class AllMatters extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
       <Table />
      </div>
    );
  }
}

export default AllMatters;
