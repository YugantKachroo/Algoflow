import React, { Component } from 'react';
import './MinCostPath.css';
import { RandomInt } from '../../../components/RandomInt';

var newGrid = [
  [5, 3, 1],
  [6, 3, 2],
  [1, 9, 8],
];

export default class MinCostPath extends Component {
  constructor() {
    super();
    this.state = { Grid: newGrid };
  }

  componentDidMount() {
    this.drawGrid();
  }

  drawGrid() {
    const { Grid } = this.state;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        var index = i + '' + j;
        document.getElementById(index).innerHTML = Grid[i][j];
        document.getElementById(index).setAttribute('class', 'givenNumber');
      }
    }
  }

  async generateMatrix() {
    const { Grid } = this.state;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        Grid[i][j] = 0;
      }
    }
    this.clearGrid();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const value = RandomInt(1, 10);
        Grid[i][j] = value;
      }
    }
    this.drawGrid();
  }

  clearGrid() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
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
          <div className='col-sm-4'>
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
          </div>
          <div className='col-sm-4'>
            <table>
              <tbody>
                <tr id='4'>
                  <td id='40'></td>
                  <td id='41'></td>
                  <td id='42'></td>
                </tr>
                <tr id='5'>
                  <td id='50'></td>
                  <td id='51'></td>
                  <td id='52'></td>
                </tr>
                <tr id='6'>
                  <td id='60'></td>
                  <td id='61'></td>
                  <td id='62'></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <div> className='col-sm-5'> */}
          <center>
            {' '}
            <button
              className='mt-2 mr-5 ui yellow button generateButton'
              onClick={() => this.generateMatrix()}
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
