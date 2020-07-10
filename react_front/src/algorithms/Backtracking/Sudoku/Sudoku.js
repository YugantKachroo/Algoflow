import React, { Component } from 'react';
import './Sudoku.css';
import { RandomInt } from '../../../components/RandomInt';

const GIVEN_VALUES = 20;
var gridDraw, timetaken, drawElement, drawSolutionnow;
var newGrid = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

export default class Sudoku extends Component {
  constructor() {
    super();
    this.state = { sudokuGrid: newGrid };
  }

  componentDidMount() {
    this.drawGrid();
  }

  drawGrid() {
    const { sudokuGrid } = this.state;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
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

  emptyMessages() {
    document.getElementById('messages').innerHTML = '';
  }

  async generateSudoku() {
    const { sudokuGrid } = this.state;
    this.disableButtons();
    this.emptyMessages();
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        sudokuGrid[i][j] = 0;
      }
    }
    this.clearGrid();
    var indexX = RandomInt(0, 8);
    var indexY = RandomInt(0, 8);
    var value = RandomInt(1, 9);
    for (let i = 0; i < GIVEN_VALUES; i++) {
      while (!this.valid(indexX, indexY, value)) {
        value = RandomInt(1, 9);
        while (sudokuGrid[indexX][indexY] !== 0) {
          indexX = RandomInt(0, 8);
          indexY = RandomInt(0, 8);
        }
      }
      sudokuGrid[indexX][indexY] = value;
    }
    this.drawGrid();
    this.enableButtons();
  }

  valid(indexX, indexY, value) {
    var row, column, subRow, subColumn;
    var { sudokuGrid } = this.state;
    for (column = 0; column < 9; column++) {
      if (sudokuGrid[indexX][column] === value) return false;
    }

    for (row = 0; row < 9; row++) {
      if (sudokuGrid[row][indexY] === value) return false;
    }

    subRow = indexX - (indexX % 3);
    subColumn = indexY - (indexY % 3);
    for (row = 0; row < 3; row++) {
      for (column = 0; column < 3; column++) {
        if (sudokuGrid[subRow + row][subColumn + column] === value)
          return false;
      }
    }

    return true;
  }

  clearGrid() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        var indexId = i + '' + j;
        document.getElementById(indexId).innerHTML = '';
      }
    }
  }

  showButton(show) {
    if (show) {
      document.getElementsByClassName('solveNow')[0].hidden = false;
    } else {
      document.getElementsByClassName('solveNow')[0].hidden = true;
    }
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async solveSudokuPuzzle() {
    await this.sleep(100);
    this.disableButtons();
    gridDraw = [];
    timetaken = 0;

    if (this.Backtrack()) {
      this.drawAnimation();
      this.showButton(1);
    } else {
      this.createNewMessage();
      this.enableGenerateButton();
      this.disableSolveButton();
    }
  }

  async createNewMessage() {
    if (timetaken) {
      console.log(gridDraw.length);
      document.getElementById('messages').innerHTML =
        'Using a backtracking algorithm takes too long to find a solution - if there is one!' +
        ' Try generating a new puzzle...';
    } else {
      document.getElementById('messages').innerHTML =
        'This puzzle does not have a solution - try generating a new one!';
    }
  }

  async drawAnimation() {
    var i, position, value;
    console.log(gridDraw.length);
    drawSolutionnow = 0;
    for (i = 0; i < gridDraw.length; i++) {
      if (drawSolutionnow) {
        break;
      }
      drawElement = gridDraw[i];
      position = drawElement[0];
      value = drawElement[1];
      console.log(position);
      if (value === '0') {
        document.getElementById(position).innerHTML = '';
      } else {
        //  console.log(position);
        document.getElementById(position).innerHTML = value;
      }
      await this.sleep(1);
    }
    this.enableGenerateButton();
    this.disableSolveButton();
    this.showButton(0);
    this.emptyMessages();
  }
  disableButtons() {
    this.disableGenerateButton();
    this.disableSolveButton();
  }

  enableButtons() {
    this.enableGenerateButton();
    this.enableSolveButton();
  }

  enableGenerateButton() {
    document.getElementsByClassName('generateButton')[0].disabled = false;
  }

  enableSolveButton() {
    document.getElementsByClassName('solveButton')[0].disabled = false;
  }

  disableGenerateButton() {
    document.getElementsByClassName('generateButton')[0].disabled = true;
  }

  disableSolveButton() {
    document.getElementsByClassName('solveButton')[0].disabled = true;
  }

  async drawSolutionNow() {
    drawSolutionnow = 1;
    this.fullGridSolution();
    this.showButton(0);
    this.disableSolveButton();
  }

  fullGridSolution() {
    const { sudokuGrid } = this.state;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        var index = i + '' + j;
        document.getElementById(index).innerHTML = sudokuGrid[i][j];
      }
    }
  }

  Backtrack() {
    const { sudokuGrid } = this.state;
    var positionOfEmptyGrid, positionOfvalue, value, row, col;
    positionOfEmptyGrid = this.locationEmptyGrid();
    if (positionOfEmptyGrid === '') return true;
    row = positionOfEmptyGrid.charAt(0);
    col = positionOfEmptyGrid.charAt(1);
    positionOfvalue = positionOfEmptyGrid;
    for (value = 1; value <= 9; value++) {
      if (this.valid(row, col, value)) {
        sudokuGrid[row][col] = value;
        drawElement = [positionOfvalue, value];
        gridDraw.push(drawElement);
        if (this.Backtrack()) return true;
        sudokuGrid[row][col] = 0;
        if (gridDraw.length > 3000000) {
          timetaken = 1;
          return false;
        }
        drawElement = [positionOfvalue, '0'];
        gridDraw.push(drawElement);
      }
    }
    return false;
  }

  locationEmptyGrid() {
    const { sudokuGrid } = this.state;
    var position = '';
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (sudokuGrid[i][j] === 0) {
          position = i + '' + j;
          return position;
        }
      }
    }
    return position;
  }

  render() {
    return (
      <div className='jumbotron-fluid bg-white'>
        <br />
        <br />
        <center>
          <div id='messages'></div>
        </center>
        <div className='container'>
          <table>
            <tbody>
              <tr id='0'>
                <td id='00'></td>
                <td id='01'></td>
                <td id='02'></td>
                <td id='03'></td>
                <td id='04'></td>
                <td id='05'></td>
                <td id='06'></td>
                <td id='07'></td>
                <td id='08'></td>
              </tr>
              <tr id='1'>
                <td id='10'></td>
                <td id='11'></td>
                <td id='12'></td>
                <td id='13'></td>
                <td id='14'></td>
                <td id='15'></td>
                <td id='16'></td>
                <td id='17'></td>
                <td id='18'></td>
              </tr>
              <tr id='2'>
                <td id='20'></td>
                <td id='21'></td>
                <td id='22'></td>
                <td id='23'></td>
                <td id='24'></td>
                <td id='25'></td>
                <td id='26'></td>
                <td id='27'></td>
                <td id='28'></td>
              </tr>
              <tr id='3'>
                <td id='30'></td>
                <td id='31'></td>
                <td id='32'></td>
                <td id='33'></td>
                <td id='34'></td>
                <td id='35'></td>
                <td id='36'></td>
                <td id='37'></td>
                <td id='38'></td>
              </tr>
              <tr id='4'>
                <td id='40'></td>
                <td id='41'></td>
                <td id='42'></td>
                <td id='43'></td>
                <td id='44'></td>
                <td id='45'></td>
                <td id='46'></td>
                <td id='47'></td>
                <td id='48'></td>
              </tr>
              <tr id='5'>
                <td id='50'></td>
                <td id='51'></td>
                <td id='52'></td>
                <td id='53'></td>
                <td id='54'></td>
                <td id='55'></td>
                <td id='56'></td>
                <td id='57'></td>
                <td id='58'></td>
              </tr>
              <tr id='6'>
                <td id='60'></td>
                <td id='61'></td>
                <td id='62'></td>
                <td id='63'></td>
                <td id='64'></td>
                <td id='65'></td>
                <td id='66'></td>
                <td id='67'></td>
                <td id='68'></td>
              </tr>
              <tr id='7'>
                <td id='70'></td>
                <td id='71'></td>
                <td id='72'></td>
                <td id='73'></td>
                <td id='74'></td>
                <td id='75'></td>
                <td id='76'></td>
                <td id='77'></td>
                <td id='78'></td>
              </tr>
              <tr id='8'>
                <td id='80'></td>
                <td id='81'></td>
                <td id='82'></td>
                <td id='83'></td>
                <td id='84'></td>
                <td id='85'></td>
                <td id='86'></td>
                <td id='87'></td>
                <td id='88'></td>
              </tr>
            </tbody>
          </table>

          {/* <div> className='col-sm-5'> */}
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
            <button
              className='mt-2 mr-5 ui purple button solveNow'
              onClick={() => this.drawSolutionNow()}
              hidden
            >
              Skip
            </button>{' '}
          </center>
        </div>
      </div>
    );
  }
}
