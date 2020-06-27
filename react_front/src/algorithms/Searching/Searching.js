import React, { Component } from 'react';
import LinearSearch from './LinearSearch/LinearSearch.js';
import BinarySearch from './BinarySearch/BinarySearch.js';

class Searching extends Component {
  render() {
    return (
      <div>
        <LinearSearch />
        <BinarySearch />
      </div>
    );
  }
}
export default Searching;
