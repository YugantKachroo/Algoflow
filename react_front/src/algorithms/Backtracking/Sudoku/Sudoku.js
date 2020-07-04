import React, { Component } from 'react';
import './Sudoku.css';

export default class Sudoku extends Component {
  constructor() {
    super();
  }
  //   componentDidMount() {
  //     this.setGrid();
  //   }
  render() {
    return (
      <div>
        <br />
        <br />
        <div class='container'>
          <table>
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
          </table>

          <div class='buttonsContainer'>
            {' '}
            <button
              class='ui yellow button generateButton'
              onclick='generateGivens()'
            >
              Generate Puzzle
            </button>{' '}
            <button
              class='ui green button solveButton'
              onclick='solveSudokuPuzzle()'
            >
              Solve
            </button>{' '}
            <button
              class='ui purple button solveButtonWithImidiateDrawing'
              onclick='DrawSolutionNow()'
              hidden
            >
              Show me the solution now!
            </button>{' '}
          </div>
          <div id='messages'></div>
        </div>
      </div>
    );
  }
}
