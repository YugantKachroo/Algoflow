import React, { Component } from 'react';
import LinearSearch from './LinearSearch/LinearSearch.js';
import BinarySearch from './BinarySearch/BinarySearch.js';

export default class Searching extends Component {
  render() {
    return (
      <div>
        <LinearSearch />
        <BinarySearch />
      </div>
    );
  }
}
