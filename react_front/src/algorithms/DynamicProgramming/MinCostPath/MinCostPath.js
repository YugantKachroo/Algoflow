import React, { Component } from 'react';
import './MinCostPath.css';
import { RandomInt } from '../../../components/RandomInt';

var newGrid = [
  [5, 3, 2],
  [6, 4, 1],
  [1, 9, 8],
];

export default class MinCostPath extends Component {
  constructor() {
    super();
    this.state = { sudokuGrid: newGrid };
  }

  componentDidMount() {
    this.drawGrid();
  }

  drawGrid() {
    const { sudokuGrid } = this.state;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        var index = i + '' + j;
        if (sudokuGrid[i][j] !== 0) {
          document.getElementById(index).innerHTML = sudokuGrid[i][j];
          document.getElementById(index).setAttribute('class', 'givenNumber');
        } else {
          document.getElementById(index).setAttribute('class', 'solvingNumber');
        }
      }
    }
  }

  clearGrid() {
    for (let i = 0; i < 1; i++) {
      for (let j = 0; j < 9; j++) {
        var indexId = i + '' + j;
        document.getElementById(indexId).innerHTML = '';
      }
    }
  }

  render() {
    return (
      <div className='jumbotron-fluid bg-white'>
        <br />
        <br />
        <div className='container'>
          <table>
            <tbody>
              <tr id='0'>
                <td id='00'></td>
                <td id='01'></td>
                <td id='02'></td>
              </tr>
              <tr id='1'>
                <td id='10'></td>
                <td id='11'></td>
                <td id='12'></td>
              </tr>
              <tr id='2'>
                <td id='20'></td>
                <td id='21'></td>
                <td id='22'></td>
              </tr>
            </tbody>
          </table>
          <center>
            {' '}
            <button
              className='mt-2 mr-5 ui yellow button generateButton'
              onClick={() => this.generateSudoku()}
            >
              Generate Puzzle
            </button>{' '}
            <button
              className='mt-2 mr-5 ui green button solveButton'
              onClick={() => this.solveSudokuPuzzle()}
            >
              Solve
            </button>{' '}
          </center>
        </div>
      </div>
    );
  }
}
