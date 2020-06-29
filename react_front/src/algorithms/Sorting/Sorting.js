import React, { Component } from 'react';
import { SelectionSortAlgorithm } from './SortingAlgorithm/SelectionSort';
import './Sorting.css';
import { RandomInt } from '../../components/RandomInt';

let WINDOW_WIDTH = window.innerWidth;
let WINDOW_HEIGHT = window.innerHeight;
let NUMBER_OF_ARRAY_BARS = parseInt((WINDOW_WIDTH - 170) / 7.5);

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
      array.push(RandomInt(50, 600));
    }
    this.setState({ array, disabled });
  };

  SelectionSort() {
    const [animations, sortArray] = SelectionSortAlgorithm(this.state.array);
  }

  render() {
    const array = this.state.array;
    const SORT_BUTTONS = 6;
    const TOTAL_BUTTONS = 1 + SORT_BUTTONS;
    return (
      <>
        <div className='buttons'>
          <button
            title='Generates a new random array'
            style={{
              position: 'absolute',
              top: `${(0.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
              left: `${(0 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.Arrayreset()}
          >
            Generate New Array
          </button>
          <button
            title='O(NlogN) Time Complexity'
            id='mergeSort'
            style={{
              position: 'absolute',
              top: `${(0.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
              left: `${(1.75 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.mergeSort()}
          >
            Merge Sort
          </button>
          <button
            title='O(N^2) Time Complexity'
            id='quickSort'
            style={{
              position: 'absolute',
              top: `${(0.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
              left: `${(2.9 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.quickSort()}
          >
            Quick Sort
          </button>
          <button
            title='O(N^2) Time Complexity'
            id='bubbleSort'
            style={{
              position: 'absolute',
              top: `${(0.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
              left: `${(4.05 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.bubbleSort()}
          >
            Bubble Sort
          </button>
          <button
            title='O(N^2) Time Complexity'
            id='insertionSort'
            style={{
              position: 'absolute',
              top: `${(0.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
              left: `${(5.2 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.insertionSort()}
          >
            Insertion Sort
          </button>
          <button
            title='O(NlogN) Time Complexity'
            id='heapSort'
            style={{
              position: 'absolute',
              top: `${(0.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
              left: `${(6.35 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.heapSort()}
          >
            Heap Sort
          </button>
          <button
            title='O(N^2) Time Complexity'
            id='selectionSort'
            style={{
              position: 'absolute',
              top: `${(0.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
              left: `${(7.5 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.selectionSort()}
          >
            Selection Sort
          </button>
        </div>
        <div
          className='array-container'
          style={{
            position: 'relative',
            right: `10px`,
            left: '10px',
            top: '80px',
          }}
        >
          {array.map((value, idx) => (
            <div
              className='array-bar'
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
              }}
            ></div>
          ))}
        </div>
      </>
    );
  }
}
