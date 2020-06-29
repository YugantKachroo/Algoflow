import React, { Component } from 'react';
import NQueen from './NQueen.js';

class Backtracking extends Component {
  render() {
    return (
      <div>
        <br />
        <h1 class='ui horizontal divider header'>NQueen</h1>
        <NQueen />
      </div>
    );
  }
}
export default Backtracking;
