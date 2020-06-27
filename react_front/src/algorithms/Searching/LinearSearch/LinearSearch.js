import React, { Component } from 'react';
import LinearTiles from './LinearTiles';
import './LinearSearch.css';
import { RandomInt } from '../../../components/RandomInt';
import Header from '../../../components/Header';

const ARRAY_BARS = 20;
const BASE_COLOR = 'purple';
const FOUND_COLOR = '#32CD32';
const NOT_FOUND_COLOR = '#6384f1';
const ANIMATION_SPEED_SECONDS = 0.4;

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
    this.setState({ array, found, disabled, message });
  };

  LinearSearch = async () => {
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
          });

          arraybarStyle.backgroundColor = FOUND_COLOR;
          arraybar.classList.add('growFind');
          arraybar.classList.add('highlight');
        }, i * ANIMATION_SPEED_SECONDS * 1000);
      } else {
        msg = `${target} not found`;
        setTimeout(() => {
          this.setState({
            disabled: true,
            found: false,
          });
          arraybarStyle.backgroundColor = NOT_FOUND_COLOR;
          arraybar.classList.add('growFind');
        }, i * ANIMATION_SPEED_SECONDS * 1000);
      }
      await setTimeout(() => {
        this.setState({
          disabled: false,
          message: msg,
        });
      }, count * ANIMATION_SPEED_SECONDS * 500);
    }
  };

  render() {
    const { message, disabled, array, found } = this.state;
    return (
      <div className='jumbotron jumbotron-fluid bg-light'>
        <center>
          <Header title='Linear Search' />
          <br />
          <div className='container'>
            <div className='row'>
              <div className='col-sm-4'></div>
              <div className=' input-group col-sm-4'>
                <input
                  type='number'
                  id='target'
                  className='mr-1 form-control'
                  placeholder='Element to be searched'
                />

                <div className='input-group-append'>
                  <button
                    onClick={() => this.LinearSearch()}
                    className='ui inverted brown button'
                    type='button'
                    id='button-addon2'
                    disabled={disabled}
                  >
                    Search
                  </button>
                  <button
                    onClick={() => this.Arrayreset()}
                    className='ui inverted red button'
                    id='resetArray'
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
          {found ? <p className='found growFind'>{message}</p> : null}
          <div className='container'>
            {array.map((value, index) => (
              <LinearTiles
                type={`linearSearch`}
                key={index}
                index={index}
                value={value}
              />
            ))}
          </div>
        </center>
      </div>
    );
  }
}

export default LinearSearch;