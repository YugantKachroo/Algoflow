import React, { Component } from 'react';
import Bar from '../../components/Bar';
import './LinkedList.css';

export default class LinkedList extends Component {
  colorChange() {
    let theme = document.getElementById('theme-switcher');
    let darkColor = 'black';
    let lightColor = 'white';
  }

  render() {
    return (
      <div className='ColorBody'>
        <Bar />
        <div id='theme-switcher'>
          <i onClick={this.colorChange} className='fas fa-adjust'></i>
        </div>
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
              <button className='button' id='add-btn'>
                Add
              </button>
              <input type='number' placeholder='Data' />
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
                In1dex
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
