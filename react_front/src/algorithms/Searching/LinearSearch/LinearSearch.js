import React, { Component } from 'react';
import './LinearTiles.css';
import LinearTiles from './LinearTiles';
import './LinearSearch.css';
import { Button, Input, Segment, Divider } from 'semantic-ui-react';
import RandomInt from '../../../components/RandomInt';
import Header from '../../../components/Header';

const ARRAY_BARS = 20;
const D_COLOR = '#63eaf1';
const FOUND_COLOR = '#6eb428';
const NOT_FOUND_COLOR = '#f16363';
const ANIMATION_SPEED_SECONDS = 0.4;

class LinearSearch extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      array: [],
      found: false,
      message: '',
      disabled: false,
      findex: 0,
      target: null,
    };
  }

  //   componentDidMount() {
  //     this.Arrayreset();
  //   }

  //   Arrayreset = () => {
  //     const array = [];
  //     const found = false;
  //     document.getElementById('target').value = '';
  //     const disabled = false;
  //     const prevArray = document.getElementsByClassName('linear-array-bar');
  //   };

  render() {
    //const { message, disabled, array, found, findex } = this.state;
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
                  id='targetVal'
                  className='mr-1 form-control'
                  placeholder='Element to be searched'
                />

                <div className='input-group-append'>
                  <button
                    onClick={() => this.linearSearch()}
                    className='ui inverted yellow button'
                    type='button'
                    id='button-addon2'
                    //  disabled={disabled}
                  >
                    Search
                  </button>
                  <button
                    onClick={() => this.resetArray()}
                    className='ui inverted red button'
                    id='resetArray'
                    type='button'
                    //  disabled={disabled}
                  >
                    Reset Array
                  </button>
                </div>
              </div>
              <div className='col-sm-1 '></div>
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export default LinearSearch;
