import React, { Component } from 'react';
import { SelectionSortAlgorithm } from './SortingAlgorithm/SelectionSort';
import { InsertionSortAlgorithm } from './SortingAlgorithm/InsertionSort';
import { BubbleSortAlgorithm } from './SortingAlgorithm/BubbleSort';
import { MergeSortAlgorithm } from './SortingAlgorithm/MergeSort';
import { QuickSortAlgorithm } from './SortingAlgorithm/QuickSort';
import './Sorting.css';
import { RandomInt } from '../../components/RandomInt';
import Slider from 'react-rangeslider';
import Bar from '../../components/Bar';

let WINDOW_WIDTH = window.innerWidth;
let WINDOW_HEIGHT = window.innerHeight;
let NUMBER_OF_ARRAY_BARS = parseInt((WINDOW_WIDTH - 200) / 8);

const PRIMARY_COLOR = '#ADD8E6';
const BUTTON_COLOR_ACTIVE = 'green';
const BUTTON_COLOR_PRIMARY = 'black';
const BUTTON_COLOR_SECONDARY = '#fc1703';
const SECONDARY_COLOR = '#FF6347';
const FINAL_COLOR = '#03fc28';
let ANIMATION_SPEED_MS;

export default class Sorting extends Component {
  constructor(props) {
    super(props);
    this.state = { array: [], value: 50, start: false };
  }

  componentDidMount() {
    this.Arrayreset();
  }

  generateEnable() {
    this.setState({ start: true });
    document.getElementById(
      'newArray'
    ).style.backgroundColor = BUTTON_COLOR_ACTIVE;
    document.getElementById('newArray').style.cursor = 'pointer';
    document.getElementById('newArray').disabled = false;
  }

  buttonEnable() {
    this.setState({ start: false });
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
    this.setState({ start: true });
    document.getElementById('selectionSort').style.cursor = 'not-allowed';
    document.getElementById('selectionSort').disabled = true;
    document.getElementById('newArray').style.cursor = 'not-allowed';
    document.getElementById('newArray').disabled = true;
    document.getElementById('mergeSort').disabled = true;
    document.getElementById('mergeSort').style.cursor = 'not-allowed';
    document.getElementById('insertionSort').disabled = true;
    document.getElementById('insertionSort').style.cursor = 'not-allowed';
    document.getElementById('bubbleSort').disabled = true;
    document.getElementById('bubbleSort').style.cursor = 'not-allowed';
    document.getElementById('quickSort').disabled = true;
    document.getElementById('quickSort').style.cursor = 'not-allowed';
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
    this.setState({ array, value: 50, start: false });
    console.log(this.state.reset);

    //console.log(this.state.reset);
    const s = document.getElementsByClassName('array-bar');
    setTimeout(() => {
      for (let i = 0; i < s.length; i++) {
        s[i].style.backgroundColor = PRIMARY_COLOR;
        //console.log(s[i].style.backgroundColor);
      }
    }, ANIMATION_SPEED_MS);
  };

  async SelectionSort() {
    await this.buttonDisable();
    let count = 0;
    ANIMATION_SPEED_MS = this.state.value / 20;
    //console.log(ANIMATION_SPEED_MS);

    document.getElementById(
      'selectionSort'
    ).style.backgroundColor = BUTTON_COLOR_SECONDARY;

    // eslint-disable-next-line
    const [animations, sortArray] = SelectionSortAlgorithm(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = animations[i][0] !== 'swapHeight';
      count++;
      const arrayBars = document.getElementsByClassName('array-bar');
      if (isColorChange === true) {
        const color =
          animations[i][0] === 'comparision1' ? SECONDARY_COLOR : PRIMARY_COLOR;
        //console.log(color);
        // eslint-disable-next-line
        const [temp, barOneIndex, barTwoIndex] = animations[i];
        setTimeout(() => {
          arrayBars[barOneIndex].style.backgroundColor = color;
          arrayBars[barTwoIndex].style.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        // eslint-disable-next-line
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
      this.setState({ start: false });
      this.generateEnable();
    }, (count + 2) * ANIMATION_SPEED_MS);
  }

  async InsertionSort() {
    await this.buttonDisable();
    ANIMATION_SPEED_MS = this.state.value / 20;
    //console.log(ANIMATION_SPEED_MS);

    document.getElementById(
      'insertionSort'
    ).style.backgroundColor = BUTTON_COLOR_SECONDARY;

    let count = 0;
    // eslint-disable-next-line
    const [animations, sortArray] = InsertionSortAlgorithm(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = animations[i][0] !== 'swapHeight';
      count++;
      const arrayBars = document.getElementsByClassName('array-bar');
      if (isColorChange === true) {
        const color =
          animations[i][0] === 'comparison1' ? SECONDARY_COLOR : PRIMARY_COLOR;
        // console.log(color);
        // eslint-disable-next-line
        const [temp, barOneIndex, barTwoIndex] = animations[i];
        setTimeout(() => {
          arrayBars[barOneIndex].style.backgroundColor = color;
          arrayBars[barTwoIndex].style.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        // eslint-disable-next-line
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
      this.setState({ start: false });
      this.generateEnable();
    }, (count + 2) * ANIMATION_SPEED_MS);
  }

  async BubbleSort() {
    await this.buttonDisable();
    ANIMATION_SPEED_MS = this.state.value / 20;
    console.log(ANIMATION_SPEED_MS);

    document.getElementById(
      'bubbleSort'
    ).style.backgroundColor = BUTTON_COLOR_SECONDARY;

    let count = 0;
    // eslint-disable-next-line
    const [animations, sortArray] = BubbleSortAlgorithm(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = animations[i][0] !== 'swapHeight';
      count++;
      const arrayBars = document.getElementsByClassName('array-bar');
      if (isColorChange === true) {
        const color =
          animations[i][0] === 'comparison1' ? SECONDARY_COLOR : PRIMARY_COLOR;
        // console.log(color);
        // eslint-disable-next-line
        const [temp, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        // eslint-disable-next-line
        const [temp, barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    const s = document.getElementsByClassName('array-bar');
    setTimeout(() => {
      for (let i = 0; i < s.length; i++) {
        s[i].style.backgroundColor = FINAL_COLOR;
        console.log(s[i].style.backgroundColor);
      }
      this.setState({ start: false });
      this.generateEnable();
    }, (count + 2) * ANIMATION_SPEED_MS);
  }

  async MergeSort() {
    await this.buttonDisable();
    ANIMATION_SPEED_MS = this.state.value / 20;
    console.log(ANIMATION_SPEED_MS);

    document.getElementById(
      'mergeSort'
    ).style.backgroundColor = BUTTON_COLOR_SECONDARY;

    let count = 0;
    // eslint-disable-next-line
    const [animations, sortArray] = MergeSortAlgorithm(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = animations[i][0] !== 'swapHeight';
      count++;
      const arrayBars = document.getElementsByClassName('array-bar');
      if (isColorChange === true) {
        const color =
          animations[i][0] === 'comparison1' ? SECONDARY_COLOR : PRIMARY_COLOR;
        // console.log(color);
        // eslint-disable-next-line
        const [temp, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        // eslint-disable-next-line
        const [temp, barIndex, newHeight] = animations[i];

        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    const s = document.getElementsByClassName('array-bar');
    setTimeout(() => {
      for (let i = 0; i < s.length; i++) {
        s[i].style.backgroundColor = FINAL_COLOR;
        console.log(s[i].style.backgroundColor);
      }
      this.setState({ start: false });
      this.generateEnable();
    }, (count + 2) * ANIMATION_SPEED_MS);
  }

  async QuickSort() {
    await this.buttonDisable();
    ANIMATION_SPEED_MS = this.state.value / 20;
    console.log(ANIMATION_SPEED_MS);

    document.getElementById(
      'quickSort'
    ).style.backgroundColor = BUTTON_COLOR_SECONDARY;

    let count = 0;
    // eslint-disable-next-line
    const [animations, sortArray] = QuickSortAlgorithm(this.state.array);
    for (let i = 0; i < animations.length - 1; i++) {
      const isColorChange = animations[i][0] !== 'swapHeight';
      count++;
      const arrayBars = document.getElementsByClassName('array-bar');
      if (isColorChange === true) {
        const color =
          animations[i][0] === 'comparison1' ? SECONDARY_COLOR : PRIMARY_COLOR;
        // console.log(color);
        // eslint-disable-next-line
        const [temp, barOneIndex, barTwoIndex] = animations[i];
        if (barOneIndex === -1) {
          continue;
        }
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        // eslint-disable-next-line
        const [temp, barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    const s = document.getElementsByClassName('array-bar');
    setTimeout(() => {
      for (let i = 0; i < s.length; i++) {
        s[i].style.backgroundColor = FINAL_COLOR;
        console.log(s[i].style.backgroundColor);
      }
      this.setState({ start: false });
      this.generateEnable();
    }, (count + 2) * ANIMATION_SPEED_MS);
  }

  render() {
    const { array, value, start } = this.state;
    const SORT_BUTTONS = 6;
    const TOTAL_BUTTONS = 1 + SORT_BUTTONS;
    return (
      <>
        <Bar />
        <div className='col-sm-2'>
          {start ? (
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
              top: `${(1.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.Arrayreset()}
          >
            Generate New Array
          </button>
          <button
            id='mergeSort'
            style={{
              position: 'absolute',
              top: `${(2.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.MergeSort()}
          >
            Merge Sort
          </button>
          <button
            id='quickSort'
            style={{
              position: 'absolute',
              top: `${(3.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.QuickSort()}
          >
            Quick Sort
          </button>
          <button
            id='bubbleSort'
            style={{
              position: 'absolute',
              top: `${(4.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.BubbleSort()}
          >
            Bubble Sort
          </button>
          <button
            id='insertionSort'
            style={{
              position: 'absolute',
              top: `${(5.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
            }}
            onClick={() => this.InsertionSort()}
          >
            Insertion Sort
          </button>

          <button
            id='selectionSort'
            style={{
              position: 'absolute',
              top: `${(6.25 * (WINDOW_HEIGHT - 20)) / TOTAL_BUTTONS}px`,
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
