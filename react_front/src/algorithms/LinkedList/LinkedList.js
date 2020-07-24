import React, { Component } from 'react';
import Bar from '../../components/Bar';
import './LinkedList.css';
import Pointer from './pointer.png';

let animations = {
  nodeAnimationTimeout: 1000,
  pointerAnimationTimeout: 800,
  deleteTimeout: 1000,
};

export default class LinkedList extends Component {
  constructor(props) {
    super(props);
    this.state = { addValue: '' };
    this.addHandleChange = this.addHandleChange.bind(this);
    this.ClickAdd = this.ClickAdd.bind(this);
  }

  ClickAdd() {
    //let userInput = this.getUserInput(this.parentNode);
    let nodes = [];
    nodes = document.getElementsByClassName('node');
    console.log(this.state.addValue);

    //this.add(nodes.length, userInput.data);
  }

  addHandleChange(event) {
    const temp = event.target.value;
    this.setState({ addValue: temp });
    // console.log(temp);
  }

  render() {
    return (
      <div className='ColorBody'>
        <Bar />
        <div className='list' id='list'></div>
        <div className='errors'>
          <div className='error-message'>
            <p id='error'></p>
          </div>
        </div>
        <div className='operations'>
          <div className='wrapper'>
            <div>
              <button className='button' id='set-btn'>
                Set
              </button>
              <input type='number' placeholder='Index' />
              <input type='number' placeholder='Data' />
            </div>
            <div>
              <button className='button' id='insert-btn'>
                Insert
              </button>
              <input type='number' placeholder='Index' />
              <input type='number' placeholder='Data' />
            </div>
            <div>
              <button onClick={this.ClickAdd} className='button' id='add-btn'>
                Add
              </button>
              <input
                type='number'
                value={this.state.addValue}
                onChange={this.addHandleChange}
                placeholder='Data'
              />
            </div>
            <div>
              <div className='remove'>
                <button className='button' id='remove-btn'>
                  Remove
                </button>
                <button className='button' id='remove-settings'>
                  <i className='fas fa-cog'></i>
                </button>
              </div>
              <button className='remove-option' id='remove-index-btn'>
                Index
              </button>
              <button className='remove-option' id='remove-data-btn'>
                Data
              </button>
              <input type='number' placeholder='Index' />
              <input type='number' placeholder='Data' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
