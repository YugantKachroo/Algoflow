import React, { Component } from 'react';
import { MakeBoard, RatMazeAlgorithm } from './RatMazeAlgorithm';
import Mazes from './Mazes';
import { RandomInt } from '../../../components/RandomInt';
import './RatMaze.css';

let Maze = Mazes[RandomInt(0, Mazes.length - 1)];
const SOL = MakeBoard(Maze.length);

const NO_PATH_COLOR = '#696969';
const PATH_COLOR = '#dfeb34';
const SAFE_COLOR = '#008000';
const ANIMATION_SPEED_MS = 380;

export default class RatMaze extends Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false, visualize: false, Maze: Maze };
  }

  componentDidMount() {
    this.drawBoard(Maze);
  }

  async boardReset() {
    let m1;
    m1 = Mazes[RandomInt(0, Mazes.length - 1)];
    Maze = m1;
    await this.setState({ Maze: m1 });
    this.drawBoard();
  }

  async drawBoard() {
    const { Maze } = this.state;
    this.setState({ visualize: false, disabled: false });
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

  async Algorithm() {
    const { Maze } = this.state;
    // eslint-disable-next-line
    const [solution, animations] = RatMazeAlgorithm(Maze, SOL);
    await this.setState({ disabled: true, visualize: true });
    const blocks = document.getElementsByClassName('r-array-tile');
    const rat = document.getElementsByClassName('rat');
    let count = 0;
    for (let i = 0; i < animations.length; i++) {
      const [x, y, ratSafe] = animations[i];
      const ind = Maze.length * x + y;

      setTimeout(() => {
        if (ratSafe) {
          blocks[ind].style.backgroundColor = SAFE_COLOR;
          rat[ind].innerHTML = '🐁';
          rat[ind].classList.add('flipH');
        } else {
          blocks[ind].style.backgroundColor = PATH_COLOR;
          rat[ind].innerHTML = '';
          rat[ind].classList.add('flipH');
        }
      }, i * ANIMATION_SPEED_MS);
      count = i;
    }

    setTimeout(() => {
      this.setState({ disabled: false });
    }, (count + 1) * ANIMATION_SPEED_MS);
  }

  render() {
    const { disabled, visualize } = this.state;
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-7'>
            <div className='Rbox Rboard mt-2' id='ratMazeBoard'></div>
          </div>
          <div className='col-sm-5 mt-2'>
            <button
              disabled={visualize}
              onClick={() => this.Algorithm()}
              className='ui blue button'
            >
              Visualize Algorithm
            </button>
            <button
              disabled={disabled}
              onClick={() => this.boardReset()}
              className='ui black button'
            >
              Reset
            </button>
            <br />
            <br />
            <div>
              <b>Rat only moves in two directions - Forward and Down</b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
