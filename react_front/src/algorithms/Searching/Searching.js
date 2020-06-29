import React, { Component } from 'react';
import LinearSearch from './LinearSearch/LinearSearch.js';
import BinarySearch from './BinarySearch/BinarySearch.js';

class Searching extends Component {
  render() {
    return (
      <div>
        <br />
        <h1 class='ui horizontal divider header'>Linear Search</h1>
        <LinearSearch />
        <h1 class='ui horizontal divider header'>Binary Search</h1>
        <BinarySearch />
      </div>
    );
  }
}
export default Searching;
