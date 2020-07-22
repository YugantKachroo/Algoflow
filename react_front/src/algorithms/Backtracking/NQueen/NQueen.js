import React, { Component } from 'react';
import { NQueenAlgorithm } from './NQueenAlgorithm';
import './NQueen.css';

const SIZE_OF_BOARD = 6;
var ANIMATION_SPEED_SECONDS = 1.5;
const CELL_COLOR = '#696969';
const SAFE_COLOR = '#ebc334';
const CROWN_COLOR = 'black';
const SAFE = '#34eb34';
const padding = 7;
const fontSize = 18;

class NQueen extends Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false };
  }
  componentDidMount() {
    this.drawBoard(SIZE_OF_BOARD);
  }
  drawBoard(SIZE) {
    ANIMATION_SPEED_SECONDS = 0.5;
    document.getElementById('NQueensBoard').innerHTML = '';
    document.getElementById('NQueenResults').innerHTML = '';
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
    const queens = document.getElementsByClassName('fa-chess-queen');
    for (let i = 0; i < arrayTiles.length; i++) {
      arrayTiles[i].style.padding = `${padding}px`;
      arrayTiles[i].style.backgroundColor = CELL_COLOR;
      queens[i].style.fontSize = `${fontSize}px`;
      queens[i].style.color = CELL_COLOR;
    }
  }

  NQueens() {
    let size = parseInt(document.getElementById('boardInput').value);
    this.drawBoard(size);
    const arrayTiles = document.getElementsByClassName('q-array-tile');
    const queen = document.getElementsByClassName('fa-chess-queen');
    const result = document.getElementById('NQueenResults');
    const animations = [];
    NQueenAlgorithm(size, animations);
    let count = 0;
    for (let k = 0; k < animations.length; k++) {
      count++;
      this.setState({ disabled: true });
      const [row, col, isSafe] = animations[k];
      const index = size * row + col;
      let alert = document.createElement('div');
      alert.classList.add('alert');
      alert.classList.add('animate__animated');
      alert.classList.add('animate__slideInDown');
      setTimeout(() => {
        if (isSafe) {
          arrayTiles[index].style.backgroundColor = SAFE_COLOR;
          arrayTiles[index].classList.add('safe-queen');
          queen[index].style.color = CROWN_COLOR;
          queen[index].classList.add('popupQueen');
          alert.innerHTML = `Queen is at Row - ${row} and Column - ${col}`;
          alert.classList.add('alert-success1');
        } else {
          arrayTiles[index].style.backgroundColor = CELL_COLOR;
          arrayTiles[index].classList.remove('safe-queen');
          queen[index].style.color = CELL_COLOR;
          queen[index].classList.remove('popupQueen');
          alert.innerHTML = `Row - ${row} and Column - ${col} position isn't valid. Now Backtracking!`;
          alert.classList.add('alert-danger1');
        }
        result.prepend(alert);
        arrayTiles[index].style.transition = '200ms all';
      }, ANIMATION_SPEED_SECONDS * 1000 * k);
    }
    const trueValue = document.getElementsByClassName('safe-queen');
    setTimeout(() => {
      for (let i = 0; i < trueValue.length; i++) {
        trueValue[i].style.backgroundColor = SAFE;
        trueValue[i].style.transition = '300ms all';
        this.setState({ disabled: false });
        if (i === trueValue.length - 1) {
          let alert = document.createElement('div');
          alert.classList.add('alert');
          alert.classList.add('animate__animated');
          alert.classList.add('animate__slideInUp');
          alert.innerHTML = `All Queens are in their valid position`;
          alert.classList.add('alert-primary1');
          result.prepend(alert);
        }
      }
    }, (count + 1) * ANIMATION_SPEED_SECONDS * 1000);
  }

  render() {
    const { disabled } = this.state;
    return (
      <div className='jumbotron jumbotron-fluid bg-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-8'>
              <div className='row'>
                <div className='col-sm-12'></div>
              </div>
              <div className='Qbox Qboard mb-2' id='NQueensBoard'></div>
              <div className='row'>
                <div className='input-group mt-2 container col-sm-6'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>Board Size</span>
                  </div>
                  <div className='ui labeled input'>
                    <input
                      type='number'
                      id='boardInput'
                      className='mr-3'
                      placeholder='Board Size'
                      defaultValue='6'
                      readOnly={true}
                    />
                  </div>

                  <div className='input-group-append'>
                    <button
                      className='ui pink button'
                      disabled={disabled}
                      onClick={() => this.NQueens()}
                    >
                      Visualise
                    </button>
                    <button
                      className='ui red button'
                      disabled={disabled}
                      onClick={() => this.drawBoard(6)}
                    >
                      Reset
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

export default NQueen;
