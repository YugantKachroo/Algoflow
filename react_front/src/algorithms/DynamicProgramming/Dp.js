import React, { Component } from 'react';
import Bar from '../../components/Bar';
import MinCostPath from './MinCostPath/MinCostPath';

class Searching extends Component {
  render() {
    return (
      <div>
        <Bar />
        <br />
        <h1 className='ui horizontal divider header'>Min Cost Path</h1>
        <MinCostPath />
      </div>
    );
  }
}
export default Searching;
