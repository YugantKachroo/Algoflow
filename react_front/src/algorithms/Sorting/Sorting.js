import React, { Component } from 'react';
//import SelectionSortAlgorithm from './SortingAlgorithm/SelectionSort';
import './Sorting.css';
import { RandomInt } from '../../components/RandomInt';

let WINDOW_WIDTH = window.innerWidth;
let WINDOW_HEIGHT = window.innerHeight;
let NUMBER_OF_ARRAY_BARS = parseInt((WINDOW_WIDTH - 200) / 20);

const PRIMARY_COLOR = 'black';
const SECONDARY_COLOR = 'red';
const ANIMATION_SPEED_MS = 10;

const DISABLED_BUTTON = 'Currently Disabled';

export default class Sorting extends Component {
  constructor(props) {
    super(props);
    this.state = { array: [], disabled: false };
  }

  componentDidMount() {
    this.Arrayreset();
  }

  Arrayreset = () => {
    const array = [];
    const disabled = false;
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(RandomInt(3, 1000));
    }
    this.setState({ array, disabled });
  };

  render() {
    return <div>Sorting</div>;
  }
}
