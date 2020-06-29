import React, { Component } from 'react';
import SearchingTiles from '../SearchingTiles';
import './LinearSearch.css';
import { RandomInt } from '../../../components/RandomInt';
import '../Searching.css';

const ARRAY_BARS = 20;
const BASE_COLOR = 'purple';
const FOUND_COLOR = '#32CD32';
const NOT_FOUND_COLOR = 'red';
const ANIMATION_SPEED_SECONDS = 1;

class LinearSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      found: false,
      message: '',
      disabled: false,
      findex: 0,
      target: null,
      start: false,
      completed: false,
    };
  }
  linearSearchAnimations = (array, target) => {
    let animations = [];
    for (let i = 0; i < array.length; i++) {
      const ele = array[i];
      const tar = parseInt(target);
      if (ele === tar) {
        animations.push([i, ele, true]);
        break;
      } else {
        animations.push([i, ele, false]);
      }
    }
    return animations;
  };

  componentDidMount() {
    this.Arrayreset();
  }

  Arrayreset = () => {
    const array = [];
    const message = '';
    const found = false;
    const start = false;
    const completed = false;
    document.getElementById('target').value = '';
    const disabled = false;
    const previousArray = document.getElementsByClassName('linear-array-bar');
    for (let index = 0; index < previousArray.length; index++) {
      previousArray[index].style.backgroundColor = BASE_COLOR;
      previousArray[index].classList.remove('growFind');
      previousArray[index].classList.remove('highlight');
    }
    for (let i = 0; i < ARRAY_BARS; i++) {
      array.push(RandomInt(3, 1000));
    }
    this.setState({ array, found, disabled, message, start, completed });
  };

  LinearSearch() {
    var msg = '';
    const target = document.getElementById('target').value;
    if (target === '') {
      return undefined;
    }
    const animations = this.linearSearchAnimations(this.state.array, target);
    console.log(animations);
    let count = 0;

    for (let i = 0; i < animations.length; i++) {
      const [index, currentElement, found] = animations[i];
      const arraybars = document.getElementsByClassName('linear-array-bar');
      const arraybar = arraybars[index];
      const arraybarStyle = arraybar.style;
      count++;
      if (found) {
        msg = `${currentElement} found at index ${index}`;
        setTimeout(() => {
          this.setState({
            disabled: true,
            found: true,
            findex: index,
            target: currentElement,
            start: true,
            completed: true,
          });

          arraybarStyle.backgroundColor = FOUND_COLOR;
          arraybar.classList.add('growFind');
          arraybar.classList.add('highlight');
        }, i * ANIMATION_SPEED_SECONDS * 500);
      } else {
        msg = `${target} not found in the array`;
        setTimeout(() => {
          this.setState({
            disabled: true,
            found: false,
            start: true,
            completed: false,
          });
          arraybarStyle.backgroundColor = NOT_FOUND_COLOR;
          arraybar.classList.add('growFind');
        }, i * ANIMATION_SPEED_SECONDS * 500);
      }
      // eslint-disable-next-line
      setTimeout(() => {
        this.setState({
          disabled: false,
          message: msg,
          start: true,
          completed: true,
        });
      }, count * ANIMATION_SPEED_SECONDS * 500);
    }
  }

  render() {
    const { message, disabled, array, found, start, completed } = this.state;
    return (
      <div className='jumbotron jumbotron-fluid bg-white'>
        <center>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-4'></div>
              <div className=' input-group col-sm-4'>
                <input
                  type='number'
                  id='target'
                  className='mr-2 form-control'
                  placeholder='Element to be searched'
                />

                <div className='input-group-append'>
                  <button
                    onClick={() => this.LinearSearch()}
                    className='ui olive button'
                    type='button'
                    id='button-addon2'
                    disabled={!start ? false : true}
                  >
                    Search
                  </button>
                  <button
                    onClick={() => this.Arrayreset()}
                    className='ui violet button'
                    id='Arrayreset'
                    type='button'
                    disabled={found ? '' : disabled}
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
                type={`LinearSearch`}
                index={index}
                value={value}
              />
            ))}
          </div>
          {completed ? (
            found ? (
              <p className='textmessage'>{message}</p>
            ) : (
              <p className='textmessage'>{message}</p>
            )
          ) : null}
        </center>
      </div>
    );
  }
}

export default LinearSearch;
