import React, { Component } from 'react';
//import SelectionSortAlgorithm from './SortingAlgorithm/SelectionSort';
import './Sorting.css';

let WINDOW_WIDTH = window.innerWidth;
let WINDOW_HEIGHT = window.innerHeight;
let NUMBER_OF_ARRAY_BARS = parseInt((WINDOW_WIDTH - 200) / 20);

const PRIMARY_COLOR = 'black';
const SECONDARY_COLOR = 'red';
const ANIMATION_SPEED_MS = 10;

export default class Sorting extends Component {
  render() {
    return <div>Sorting</div>;
  }
}
