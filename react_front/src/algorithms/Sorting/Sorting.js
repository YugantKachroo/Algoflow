import React, { Component, Fragment } from 'react';
import { SelectionSortAlgorithm } from './SortingAlgorithm/SelectionSort';
import './Sorting.css';
import { RandomInt } from '../../components/RandomInt';

let WINDOW_WIDTH = window.innerWidth;
let WINDOW_HEIGHT = window.innerHeight;
let NUMBER_OF_ARRAY_BARS = parseInt((WINDOW_WIDTH - 200) / 8);

const PRIMARY_COLOR = 'lightgreen';
const SECONDARY_COLOR = '#f54242';
const ANIMATION_SPEED_MS = 2;
//const FINAL_COLOR = 'yellow';

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
      array.push(RandomInt(50, WINDOW_HEIGHT - 100));
    }
    this.setState({ array, disabled });
  };

  SelectionSort() {
    const [animations, sortArray] = SelectionSortAlgorithm(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === 'comparision1' ||
        animations[i][0] === 'comparision2';
      const arrayBars = document.getElementsByClassName('array-bar');
      if (isColorChange === true) {
        const color =
          animations[i][0] === 'comparision1' ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [temp, barOneIndex, barTwoIndex] = animations[i];
        setTimeout(() => {
          arrayBars[barOneIndex].style.backgroundColor = color;
          arrayBars[barTwoIndex].style.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [temp, barIndex, newHeight] = animations[i];
        setTimeout(() => {
          arrayBars[barIndex].style.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    const RESTORE_TIME = parseInt(
      (ANIMATION_SPEED_MS * animations.length) / 2 + 3000
    );
    setTimeout(() => RESTORE_TIME);
    //const arrayBars = document.getElementsByClassName('array-bar');
  }

  render() {
    const { array } = this.state;
    const SORT_BUTTONS = 6;
    const TOTAL_BUTTONS = 1 + SORT_BUTTONS;
    return (
      <>
        <div
          className='array-container'
          style={{ position: 'absolute', right: `20px` }}
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
        <div className='buttons'>
          <button
            style={{
              position: 'relative',
              top: `${(0.1 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.Arrayreset()}
          >
            Generate New Array
          </button>
          <button
            id='mergeSort'
            style={{
              position: 'relative',
              top: `${(0.75 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.mergeSort()}
          >
            Merge Sort
          </button>
          <button
            id='quickSort'
            style={{
              position: 'relative',
              top: `${(1.5 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.quickSort()}
          >
            Quick Sort
          </button>
          <button
            id='bubbleSort'
            style={{
              position: 'relative',
              top: `${(2.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.bubbleSort()}
          >
            Bubble Sort
          </button>
          <button
            id='insertionSort'
            style={{
              position: 'relative',
              top: `${(3.2 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.insertionSort()}
          >
            Insertion Sort
          </button>
          <button
            id='heapSort'
            style={{
              position: 'relative',
              top: `${(4.05 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.heapSort()}
          >
            Heap Sort
          </button>
          <button
            id='SelectionSort'
            style={{
              position: 'relative',
              top: `${(5 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.SelectionSort()}
          >
            Selection Sort
          </button>
        </div>
      </>
    );
  }
}
