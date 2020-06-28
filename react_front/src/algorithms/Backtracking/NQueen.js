import React, { Component } from 'react';
//import {NQueenAlgorithm} from './NQueenAlgorithm';

import Header from '../../components/Header';
const SIZE = 8;
var ANIMATION_SPEED_SECONDS = 1.5;

const CELL_COLOR = '#BFC9CA';
const SAFE_COLOR = '#DC143C';
const CROWN_COLOR = '#FFFFFF';
const SAFE = '#2ECC71';

export default class NQueen extends Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false };
  }
  componentDidMount() {
    this.drawBoard(SIZE);
  }
  drawBoard(SIZE) {
    let padding = 7;
    let fontSize = 18;
    ANIMATION_SPEED_SECONDS = 0.5;

    const container = document.getElementById('NQueensBoard');

    container.style.setProperty('--Qgrid-rows', SIZE);
    container.style.setProperty('--Qgrid-cols', SIZE);

    for (let i = 0; i < SIZE * SIZE; i++) {
      let cell = document.createElement('div');
      let item = document.createElement('i');
      cell.appendChild(item).className = 'fas fa-chess-queen';
      container.appendChild(cell).className = 'Qgrid-item q-array-tile';
    }
    const arrayTiles = document.getElementsByClassName('q-array-tile');
    const queens = document.getElementsByClassName('fas');
    for (let i = 0; i < arrayTiles.length; i++) {
      arrayTiles[i].style.padding = `${padding}px`;
      arrayTiles[i].style.fontSize = `${fontSize}px`;
      arrayTiles[i].style.color = CELL_COLOR;
      arrayTiles[i].style.backgroundColor = CELL_COLOR;
    }
  }
  render() {
    const { disabled } = this.state;
    return (
      <div className='jumbotron jumbotron-fluid bg-dark'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-8'>
              <div className='row'>
                <div className='col-sm-12'>
                  <Header title='N QUEEN' />
                </div>
              </div>
              <div className='Qbox Qboard mb-2' id='NQueensBoard'></div>
              <div className='row'>
                <div className='input-group mt-2 container col-sm-5'>
                  <div class='ui labeled input'>
                    <div class='ui label'>Board Size</div>
                    <input
                      type='number'
                      id='boardInput'
                      className='mr-3'
                      placeholder='Board Size'
                      defaultValue='8'
                      readOnly={true}
                    />
                  </div>

                  <div className='input-group-append'>
                    <button
                      className='ui pink button'
                      disabled={disabled}
                      onClick={() => this.NQueensProblem()}
                    >
                      Visualise
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div id='NQueenResults' className='col-sm-4 mt-3'></div>
          </div>
        </div>
      </div>
    );
  }
}
