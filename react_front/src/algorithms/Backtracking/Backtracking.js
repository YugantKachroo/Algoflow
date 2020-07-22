import React, { Component } from 'react';
import NQueen from './NQueen/NQueen.js';
import Sudoku from './Sudoku/Sudoku.js';
import RatMaze from './RatMaze/RatMaze.js';
import Bar from '../../components/Bar';

class Backtracking extends Component {
  render() {
    return (
      <div>
        <Bar />
        <br />
        <h1 className='ui horizontal divider header'> NQueen </h1> <NQueen />
        <br />
        <h1 className='ui horizontal divider header'> Rat in a Maze </h1>
        <RatMaze />
        <br />
        <h1 className='ui horizontal divider header'> Sudoku </h1> <Sudoku />
      </div>
    );
  }
}
export default Backtracking;
