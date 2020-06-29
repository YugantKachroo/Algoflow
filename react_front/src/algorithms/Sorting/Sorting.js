import React, { Component, Fragment } from 'react';
import { SelectionSortAlgorithm } from './SortingAlgorithm/SelectionSort';
import './Sorting.css';
import { RandomInt } from '../../components/RandomInt';
import Slider from 'react-rangeslider';

let WINDOW_WIDTH = window.innerWidth;
let WINDOW_HEIGHT = window.innerHeight;
let NUMBER_OF_ARRAY_BARS = parseInt((WINDOW_WIDTH - 200) / 8);

const PRIMARY_COLOR = 'yellow';
const BUTTON_COLOR_PRIMARY = 'black';
const BUTTON_COLOR_SECONDARY = '#fc1703';
const SECONDARY_COLOR = '#f54242';
const FINAL_COLOR = 'green';
let ANIMATION_SPEED_MS;

export default class Sorting extends Component {
  constructor(props) {
    super(props);
    this.state = { array: [], value: 50, startc: false };
  }

  componentDidMount() {
    this.Arrayreset();
  }

  buttonEnable() {
    this.setState({ startc: false });
    document.getElementById(
      'selectionSort'
    ).style.backgroundColor = BUTTON_COLOR_PRIMARY;
    document.getElementById('selectionSort').style.cursor = 'pointer';
    document.getElementById('selectionSort').disabled = false;
    document.getElementById(
      'newArray'
    ).style.backgroundColor = BUTTON_COLOR_PRIMARY;
    document.getElementById('newArray').style.cursor = 'pointer';
    document.getElementById('newArray').disabled = false;
    document.getElementById(
      'mergeSort'
    ).style.backgroundColor = BUTTON_COLOR_PRIMARY;
    document.getElementById('mergeSort').style.cursor = 'pointer';
    document.getElementById('mergeSort').disabled = false;
    document.getElementById(
      'heapSort'
    ).style.backgroundColor = BUTTON_COLOR_PRIMARY;
    document.getElementById('heapSort').style.cursor = 'pointer';
    document.getElementById('heapSort').disabled = false;
    document.getElementById(
      'insertionSort'
    ).style.backgroundColor = BUTTON_COLOR_PRIMARY;
    document.getElementById('insertionSort').style.cursor = 'pointer';
    document.getElementById('insertionSort').disabled = false;
    document.getElementById(
      'quickSort'
    ).style.backgroundColor = BUTTON_COLOR_PRIMARY;
    document.getElementById('quickSort').style.cursor = 'pointer';
    document.getElementById('quickSort').disabled = false;
    document.getElementById(
      'bubbleSort'
    ).style.backgroundColor = BUTTON_COLOR_PRIMARY;
    document.getElementById('bubbleSort').style.cursor = 'pointer';
    document.getElementById('bubbleSort').disabled = false;
  }

  buttonDisable() {
    this.setState({ startc: true });
    document.getElementById('selectionSort').style.cursor = 'not-allowed';
    document.getElementById('selectionSort').disabled = true;
    document.getElementById('mergeSort').disabled = true;
    document.getElementById('mergeSort').style.cursor = 'not-allowed';
    document.getElementById('insertionSort').disabled = true;
    document.getElementById('insertionSort').style.cursor = 'not-allowed';
    document.getElementById('bubbleSort').disabled = true;
    document.getElementById('bubbleSort').style.cursor = 'not-allowed';
    document.getElementById('quickSort').disabled = true;
    document.getElementById('quickSort').style.cursor = 'not-allowed';
    document.getElementById('heapSort').disabled = true;
    document.getElementById('heapSort').style.cursor = 'not-allowed';
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  Arrayreset = () => {
    const array = [];
    this.buttonEnable();
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(RandomInt(50, WINDOW_HEIGHT - 120));
    }
    this.setState({ array, value: 50, startc: false });
  };

  async SelectionSort() {
    await this.buttonDisable();
    ANIMATION_SPEED_MS = this.state.value / 200;
    console.log(ANIMATION_SPEED_MS);

    document.getElementById(
      'selectionSort'
    ).style.backgroundColor = BUTTON_COLOR_SECONDARY;
    let count = 0;
    const [animations, sortArray] = SelectionSortAlgorithm(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = animations[i][0] !== 'swapHeight';
      count++;
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
    const s = document.getElementsByClassName('array-bar');
    setTimeout(() => {
      for (let i = 0; i < s.length; i++) {
        s[i].style.backgroundColor = FINAL_COLOR;
        console.log(s[i].style.backgroundColor);
      }
    }, (count + 2) * ANIMATION_SPEED_MS);

    // const RESTORE_TIME = parseInt(
    //   (ANIMATION_SPEED_MS * animations.length) / 2 + 3000
    // );
    // setTimeout(async () => await this.buttonEnable(), RESTORE_TIME);
  }

  render() {
    const { array, value, startc } = this.state;
    const SORT_BUTTONS = 6;
    const TOTAL_BUTTONS = 1 + SORT_BUTTONS;
    return (
      <>
        <div className='col-sm-2'>
          {startc ? (
            ''
          ) : (
            <Slider
              value={value}
              labels={{ 1: 'Fast', 50: 'Medium', 100: 'Slow' }}
              min={1}
              max={100}
              disabled={true}
              orientation='horizontal'
              onChange={this.handleChange}
            />
          )}
        </div>
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
            id='newArray'
            style={{
              position: 'absolute',
              top: `${(1.15 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.Arrayreset()}
          >
            Generate New Array
          </button>
          <button
            id='mergeSort'
            style={{
              position: 'absolute',
              top: `${(1.96 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.mergeSort()}
          >
            Merge Sort
          </button>
          <button
            id='quickSort'
            style={{
              position: 'absolute',
              top: `${(2.95 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.quickSort()}
          >
            Quick Sort
          </button>
          <button
            id='bubbleSort'
            style={{
              position: 'absolute',
              top: `${(3.95 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.bubbleSort()}
          >
            Bubble Sort
          </button>
          <button
            id='insertionSort'
            style={{
              position: 'absolute',
              top: `${(4.95 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.insertionSort()}
          >
            Insertion Sort
          </button>
          <button
            id='heapSort'
            style={{
              position: 'absolute',
              top: `${(5.96 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.heapSort()}
          >
            Heap Sort
          </button>
          <button
            id='selectionSort'
            style={{
              position: 'absolute',
              top: `${(6.9 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
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
