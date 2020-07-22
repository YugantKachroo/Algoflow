import React, { Component } from 'react';
import './MinCostPath.css';
import { RandomInt } from '../../../components/RandomInt';
import {
  MinCostPathAlgorithms,
  MinCostPathAlgorithm,
} from './MinCostPathAlgorithm';

var Maze = [
  [5, 3, 2],
  [6, 4, 1],
  [1, 9, 8],
];

const SIZE = 3;

const NO_PATH_COLOR = '#696969';
const PATH_COLOR = '#dfeb34';

export default class MinCostPath extends Component {
  constructor() {
    super();
    this.state = { QuestionMaze: Maze, SolutionMaze: Maze };
  }

  componentDidMount() {
    this.drawQuestionBoard();
    this.drawSolutionBoard();
  }

  drawQuestionBoard() {
    const { QuestionMaze } = this.state;
    this.setState({ visualize: false, disabled: false });
    const Rows = QuestionMaze.length;
    const Cols = QuestionMaze[0].length;
    let QuestionCost = document.getElementById('QuestionBoard');
    QuestionCost.innerHTML = '';
    QuestionCost.style.setProperty('--Rgrid-rows', Rows);
    QuestionCost.style.setProperty('--Rgrid-cols', Cols);
    // for (let c = 0; c < Rows * Cols; c++) {
    //   let cell = document.createElement('div');
    //   const value = RandomInt(1, 10);
    //   cell.innerText = value;
    //   QuestionMaze[]

    //   ratMaze.appendChild(cell).className = 'grid-item';
    // }
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        let cell = document.createElement('div');
        const value = RandomInt(1, 10);
        cell.innerText = value;
        QuestionMaze[i][j] = value;
        QuestionCost.appendChild(cell).className = 'grid-item';
      }
    }
    this.setState({ QuestionMaze: QuestionMaze });
  }

  drawSolutionBoard() {
    const { SolutionMaze } = this.state;
    this.setState({ visualize: false, disabled: false });
    const Rows = SolutionMaze.length;
    const Cols = SolutionMaze[0].length;
    let SolutionCost = document.getElementById('SolutionBoard');
    SolutionCost.innerHTML = '';
    SolutionCost.style.setProperty('--Rgrid-rows', Rows);
    SolutionCost.style.setProperty('--Rgrid-cols', Cols);
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        let cell = document.createElement('div');
        cell.innerText = 0;
        //  SolutionMaze[i][j] = '';
        SolutionCost.appendChild(cell).className = 'grid-item';
      }
    }
    this.setState({ SolutionMaze: SolutionMaze });
  }

  boardReset() {
    this.drawQuestionBoard();
    this.drawSolutionBoard();
  }

  async Algorithm() {
    const { QuestionMaze, SolutionMaze } = this.state;
    // console.log(QuestionMaze[1][1]);
    // const [animations] = MinCostPathAlgorithm(QuestionMaze, SIZE, SIZE);
    const animations = [];
    SolutionMaze[0][0] = QuestionMaze[0][0];
    animations.push(0);
    animations.push(0);
    //console.log(animations);
    for (let i = 1; i <= SIZE - 1; i++) {
      SolutionMaze[i][0] = SolutionMaze[i - 1][0] + QuestionMaze[i][0];
      animations.push(i);
      animations.push(0);
    }
    for (let i = 1; i <= SIZE - 1; i++) {
      SolutionMaze[0][i] = SolutionMaze[0][i - 1] + QuestionMaze[0][i];
      animations.push(0);
      animations.push(i);
    }
    for (let i = 1; i <= SIZE - 1; i++) {
      for (let j = 1; j <= SIZE - 1; j++) {
        SolutionMaze[i][j] =
          Math.min(
            SolutionMaze[i - 1][j - 1],
            SolutionMaze[i - 1][j],
            SolutionMaze[i][j - 1]
          ) + QuestionMaze[i][j];

        animations.push(i);
        animations.push(j);
      }
    }
    console.log(animations);
    console.log(SolutionMaze[SIZE - 1][SIZE - 1]);

    return;
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
