import React, { Component } from 'react';
import { MakeBoard, RatMazeAlgorithm } from './RatMazeAlgorithm';
import Mazes from './Mazes';
import { RandomInt } from '../../../components/RandomInt';
import './RatMaze.css';

const Maze = Mazes[RandomInt(0, Mazes.length - 1)];
const SOL = MakeBoard(Maze.length);

const NO_PATH_COLOR = '#696969';
const PATH_COLOR = '#dfeb34';
const SAFE_COLOR = '#93eb34';
const ANIMATION_SPEED_MS = 1000;

export default class RatMaze extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.drawBoard(Maze);
  }

  async drawBoard(Maze = []) {
    const Rows = Maze.length;
    const Cols = Maze[0].length;
    const ratMaze = document.getElementById('ratMazeBoard');
    ratMaze.innerHTML = '';
    ratMaze.style.setProperty('--Rgrid-rows', Rows);
    ratMaze.style.setProperty('--Rgrid-cols', Cols);
    for (let i = 0; i < Rows; i++) {
      for (let j = 0; j < Cols; j++) {
        let cell = document.createElement('div');
        let item = document.createElement('i');
        let cellStyle = cell.style;
        cell.appendChild(item).className = 'fas rat';
        if (i === 0 && j === 0) {
          cell.appendChild(item).classList.add('flipH');
          item.innerHTML = '🐁';
        }
        if (i === Rows - 1 && j === Cols - 1) {
          item.innerHTML = '🧀';
        }
        if (Maze[i][j] === 1) {
          cellStyle.backgroundColor = PATH_COLOR;
        } else {
          cellStyle.backgroundColor = NO_PATH_COLOR;
        }
        ratMaze.appendChild(cell).className = 'Rgrid-item r-array-tile';
      }
    }
  }

  render() {
    return (
      <div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-7'>
              <div className='Rbox Rboard mt-2' id='ratMazeBoard'></div>
            </div>
            <div className='col-sm-5 mt-2'>
              <button
                onClick={() => this.Algortihm()}
                className='ui blue button'
              >
                Visualize Algorithm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
