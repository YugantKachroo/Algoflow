import React, {
  Component
} from 'react';
import NQueen from './NQueen.js';
import Sudoku from './Sudoku/Sudoku.js';

class Backtracking extends Component {
  render() {
    return ( <
      div >
      <
      br / >
      <
      h1 className = 'ui horizontal divider header' > NQueen < /h1> <
      NQueen / >
      <
      br / >
      <
      h1 className = 'ui horizontal divider header' > Sudoku < /h1> <
      Sudoku / >
      <
      /div>
    );
  }
}
export default Backtracking;