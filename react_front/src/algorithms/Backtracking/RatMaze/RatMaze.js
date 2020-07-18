import React, { Component } from 'react';
import { MakeBoard, RatMazeAlgorithm } from './RatMazeAlgorithm';
import Mazes from './Mazes';
import { RandomInt } from '../../../components/RandomInt';
import './RatMaze.css';

const Maze = Mazes[RandomInt(0, Mazes.length - 1)];
const SOL = MakeBoard(Maze.length);

const NO_PATH_COLOR = '#ededed';
const PATH_COLOR = '#ADD2FE';
const SAFE_COLOR = '#B0FCEF';

export default class RatMaze extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
