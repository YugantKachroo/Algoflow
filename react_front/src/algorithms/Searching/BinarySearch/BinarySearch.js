import React, { Component } from 'react';
import BinaryTiles from './BinaryTiles';
import './BinarySearch.css';
import { RandomInt } from '../../../components/RandomInt';
import Header from '../../../components/Header';
import { binarySearchAnimations } from './BinaryAlgorithm';

const ARRAY_BARS = 15;
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
    };
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
    });
  }

  hightlightWithinBounds(start, end, arrayTiles) {
    for (let i = start; i <= end; i++) {
      setTimeout(() => {
        arrayTiles[i].style.backgroundColor = NOT_FOUND_COLOR;
      }, i * 100);
    }
  }

  resetAllTiles(arrayTiles) {
    for (let i = 0; i < arrayTiles.length; i++) {
      arrayTiles[i].style.backgroundColor = BASE_COLOR;
    }
  }

  binarySearch() {
    const { array } = this.state;
    const animations = [];
    let count = 0;
    const arrayTiles = document.getElementsByClassName('binary-array-bar');
    const target = document.getElementById('binarySearchTargetVal').value;
    if (target === '') return;

    binarySearchAnimations(
      array,
      0,
      array.length - 1,
      parseInt(target),
      animations
    );

    for (let k = 0; k < animations.length; k++) {
      const [left, right, mid, found] = animations[k];
      count++;

      if (k === animations.length - 1 && found) {
        setTimeout(() => {
          this.setState({ disabled: true, found: true });
          this.resetAllTiles(arrayTiles);
          arrayTiles[mid].classList.add('highlight');
          arrayTiles[mid].style.backgroundColor = FOUND_COLOR;
        }, (k + 1) * ANIMATION_SPEED_SECONDS * 1000);
      }

      if (left === 0 && right === 0 && mid === 0 && !found) {
        setTimeout(() => {
          console.log('ELement not found');
          this.setState({
            msgAfterExecution: `Element not found`,
            found: false,
          });
          this.resetAllTiles(arrayTiles);
        }, (k + 1) * ANIMATION_SPEED_SECONDS * 1000);
      }

      setTimeout(() => {
        this.setState({ disabled: true });
        this.resetAllTiles(arrayTiles);
        this.hightlightWithinBounds(left, right, arrayTiles);
      }, k * 1000 * ANIMATION_SPEED_SECONDS);
    }

    setTimeout(() => {
      this.setState({ disabled: false });
    }, count * 1000 * ANIMATION_SPEED_SECONDS);
  }

  render() {
    const { array, found, disabled, msgAfterExecution } = this.state;

    return (
      <div className='jumbotron jumbotron-fluid bg-dark'>
        <center>
          <Header title='BINARY SEARCH' />
          <br />
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
                    disabled={disabled}
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
          {!found ? <p className='not-found'>{msgAfterExecution}</p> : null}
          <br />
          <div className='container'>
            {array.map((value, idx) => (
              <BinaryTiles
                type={'binarySearch'}
                key={idx}
                index={idx}
                value={value}
              />
            ))}
          </div>
        </center>
      </div>
    );
  }
}

export default BinarySearch;
