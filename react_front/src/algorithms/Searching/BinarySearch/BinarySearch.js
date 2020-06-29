import React, { Component } from 'react';
import SearchingTiles from '../SearchingTiles';
import './BinarySearch.css';
import { RandomInt } from '../../../components/RandomInt';
import '../Searching.css';

const ARRAY_BARS = 19;
const BASE_COLOR = 'purple';
const FOUND_COLOR = '#32CD32';
const NOT_FOUND_COLOR = 'red';
const ANIMATION_SPEED_SECONDS = 3;

class BinarySearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      found: false,
      disabled: false,
      elementFoundAt: 0,
      target: null,
      msgAfterExecution: null,
      previousLength: 0,
      animations: [],
      completed: false,
      start: false,
    };
  }

  binarySearchAnimations(array, left, right, element, animations = []) {
    if (right >= left) {
      let mid = parseInt(left + (right - left) / 2);
      if (array[mid] === element) {
        animations.push([left, right, mid, true]);
        return true;
      } else if (array[mid] > element) {
        animations.push([left, right, mid, false]);
        this.binarySearchAnimations(array, left, mid - 1, element, animations);
      } else {
        animations.push([left, right, mid, false]);
        this.binarySearchAnimations(array, mid + 1, right, element, animations);
      }
      return false;
    }
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    let array = [];
    const prevArray = document.getElementsByClassName('binary-array-bar');
    document.getElementById('binarySearchTargetVal').value = '';
    for (let idx = 0; idx < prevArray.length; idx++) {
      prevArray[idx].style.backgroundColor = BASE_COLOR;
      prevArray[idx].classList.remove('growFind');
      prevArray[idx].classList.remove('highlight');
    }
    for (let i = 0; i < ARRAY_BARS; i++) {
      array.push(RandomInt(5, 850));
    }
    let sortedArray = array.slice().sort((a, b) => a - b);
    this.setState({
      array: sortedArray,
      found: false,
      disabled: false,
      msgAfterExecution: null,
      previousLength: this.state.animations.length,
      start: false,
      completed: false,
    });
  }

  boundHighlight(start, end, arrayBars) {
    for (let i = start; i <= end; i++) {
      setTimeout(() => {
        arrayBars[i].style.backgroundColor = NOT_FOUND_COLOR;
      }, i * 100);
    }
  }

  tilesReset(arrayBars) {
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = BASE_COLOR;
    }
  }

  binarySearch() {
    const { array } = this.state;
    const animations = [];
    let count = 0;
    let msg = '';
    const arrayBars = document.getElementsByClassName('binary-array-bar');
    const target = document.getElementById('binarySearchTargetVal').value;
    if (target === '') return;
    let midi = Math.floor(array.length / 2);
    let starti = 0;
    let endi = array.length - 1;
    // eslint-disable-next-line
    if (array[midi] == target) {
      starti = midi;
      endi = midi;
    } else if (array[midi] > target) {
      starti = 0;
      endi = midi - 1;
    } else {
      starti = midi + 1;
      endi = array.length - 1;
    }

    this.binarySearchAnimations(
      array,
      starti,
      endi,
      parseInt(target),
      animations
    );

    for (let k = 0; k < animations.length; k++) {
      const [left, right, mid, found] = animations[k];
      count++;
      if (k === animations.length - 1 && found) {
        msg = `${target} found at index ${mid}`;
        setTimeout(() => {
          this.setState({
            start: true,
            completed: true,
            disabled: true,
            found: true,
          });
          this.tilesReset(arrayBars);
          arrayBars[mid].classList.add('highlight');
          arrayBars[mid].classList.add('growFind');
          arrayBars[mid].style.backgroundColor = FOUND_COLOR;
        }, (k + 1) * ANIMATION_SPEED_SECONDS * 1000);
      }

      if (!found) {
        msg = `${target} not present in the array`;

        setTimeout(() => {
          this.setState({
            found: false,
            start: true,
            completed: true,
          });
          this.tilesReset(arrayBars);
        }, (k + 1) * ANIMATION_SPEED_SECONDS * 1000);
      }

      setTimeout(() => {
        this.setState({ disabled: true, start: true });
        this.tilesReset(arrayBars);

        this.boundHighlight(left, right, arrayBars);
      }, k * 1000 * ANIMATION_SPEED_SECONDS);
    }

    setTimeout(() => {
      this.setState({ disabled: false, start: true, msgAfterExecution: msg });
    }, count * 1000 * ANIMATION_SPEED_SECONDS);
  }

  render() {
    const {
      array,
      found,
      disabled,
      msgAfterExecution,
      start,
      completed,
    } = this.state;

    return (
      <div className='jumbotron jumbotron-fluid bg-white'>
        <center>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-4'></div>
              <div className='input-group col-sm-4'>
                <input
                  type='number'
                  id='binarySearchTargetVal'
                  className='mr-2 form-control'
                  placeholder='Element to be searched'
                />
                <div className='input-group-append'>
                  <button
                    onClick={() => this.binarySearch()}
                    className='ui olive button'
                    type='button'
                    id='binarySearchBtn'
                    disabled={!start ? false : true}
                  >
                    Search
                  </button>
                  <button
                    onClick={() => this.resetArray()}
                    className='ui violet button'
                    id='binarySearchResetArray'
                    type='button'
                    disabled={disabled}
                  >
                    Reset Array
                  </button>
                </div>
              </div>
              <div className='col-sm-1 '></div>
            </div>
          </div>
          <br />
          <div className='container'>
            {array.map((value, index) => (
              <SearchingTiles
                type={'BinarySearch'}
                key={index}
                index={index}
                value={value}
              />
            ))}
          </div>
          {completed ? (
            found ? (
              <p className='textmessage'>{msgAfterExecution}</p>
            ) : (
              <p className='textmessage'>{msgAfterExecution}</p>
            )
          ) : null}
        </center>
      </div>
    );
  }
}

export default BinarySearch;
