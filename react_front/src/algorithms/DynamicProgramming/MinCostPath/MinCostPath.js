import React, { Component } from 'react';
import './MinCostPath.css';
import { RandomInt } from '../../../components/RandomInt';

var Maze = [
  [5, 3, 2],
  [6, 4, 1],
  [1, 9, 8],
];

const NO_PATH_COLOR = '#696969';
const PATH_COLOR = '#dfeb34';

export default class MinCostPath extends Component {
  constructor() {
    super();
    this.state = { Maze: Maze };
  }

  componentDidMount() {
    this.drawBoard(Maze);
    this.drawBoard1(Maze);
  }

  async drawBoard() {
    const { Maze } = this.state;
    this.setState({ visualize: false, disabled: false });
    const Rows = Maze.length;
    const Cols = Maze[0].length;
    let ratMaze = document.getElementById('QuestionBoard');
    ratMaze.innerHTML = '';
    ratMaze.style.setProperty('--Rgrid-rows', Rows);
    ratMaze.style.setProperty('--Rgrid-cols', Cols);
    for (let c = 0; c < Rows * Cols; c++) {
      let cell = document.createElement('div');
      cell.innerText = c + 1;
      ratMaze.appendChild(cell).className = 'grid-item';
    }
  }

  async drawBoard1() {
    const { Maze } = this.state;
    this.setState({ visualize: false, disabled: false });
    const Rows = Maze.length;
    const Cols = Maze[0].length;
    let ratMaze = document.getElementById('SolutionBoard');
    ratMaze.innerHTML = '';
    ratMaze.style.setProperty('--Rgrid-rows', Rows);
    ratMaze.style.setProperty('--Rgrid-cols', Cols);
    for (let c = 0; c < Rows * Cols; c++) {
      let cell = document.createElement('div');
      cell.innerText = 0;
      ratMaze.appendChild(cell).className = 'grid-item';
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='Rbox Rboard mt-2' id='QuestionBoard'></div>
          </div>
          <div className='col-sm-2'>
            <div className='Rbox Rboard mt-2' id='SolutionBoard'></div>
          </div>
          <div className='but'>
            <button
              onClick={() => this.Algorithm()}
              className='mr-5 ui blue button'
            >
              Visualize Algorithm
            </button>
            <button
              onClick={() => this.boardReset()}
              className='ui black button'
            >
              Reset
            </button>

            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
