import React, { Component } from 'react';
import Legend from './Utils/Legend';
import { c1Dto2D, c2Dto1D } from './Utils/Conversion';
import Node from './Node/Node';
import { DijkstraND } from './Algorithms/DijkstraND';
import { DijkstraWD } from './Algorithms/DijkstraWD';
import { BFSND } from './Algorithms/BFSND';
import { BFSWD } from './Algorithms/BFSWD';
import { DFSND } from './Algorithms/DFSND';
import { DFSWD } from './Algorithms/DFSWD';
import { BiDirectionalSearch } from './Algorithms/BiDirectionalSearch';
import { Maze } from './Maze/Maze';
import { WeightMaze } from './Maze/WeightMaze';
import Bar from '../../components/Bar';
import './Graph.css';

const ROWS = 41;
const COLS = 41;
const START_NODE_STATE = 1;
const END_NODE_STATE = 2;
const WALL_NODE_STATE = 3;
const WEIGHT_NODE_STATE = 4;
const SPEED = 25;

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      modifyingNodeState: 0,
      START_NODE_ROW: 12,
      START_NODE_COL: 16,
      FINISH_NODE_ROW: 26,
      FINISH_NODE_COL: 23,
      disableMazesButton: false,
      disableNodesButton: false,
      disableClearMazeButton: false,
      Weight: false,
      speed: SPEED,
    };
  }

  componentDidMount() {
    this.setUpGrid();
  }

  setUpGrid() {
    const grid = [];
    const gridBox = document.getElementById('grid');
    gridBox.style.setProperty('--p-grid-rows', ROWS);
    gridBox.style.setProperty('--p-grid-cols', COLS);
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        grid.push(this.createNode(i, j));
      }
    }
    //console.log(grid);
    this.setState({ grid, Weight: false });
  }

  createNode(row, col) {
    const {
      START_NODE_ROW,
      START_NODE_COL,
      FINISH_NODE_ROW,
      FINISH_NODE_COL,
    } = this.state;

    return {
      row,
      col,
      isStart: row === START_NODE_ROW && col === START_NODE_COL,
      isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      isWeight: false,
      previousNode: null,
    };
  }

  clearBoard() {
    this.setUpGrid();
    const { grid } = this.state;
    for (let i = 0; i < grid.length; i++) {
      const node = grid[i];

      if (node.isStart) {
        document
          .getElementById(`node-${node.row}-${node.col}`)
          .classList.remove('node-shortest-path-start');
        document
          .getElementById(`node-${node.row}-${node.col}`)
          .classList.add('node-start');
      }
      if (node.isFinish) {
        document
          .getElementById(`node-${node.row}-${node.col}`)
          .classList.remove('node-shortest-path-finish');
        document
          .getElementById(`node-${node.row}-${node.col}`)
          .classList.add('node-finish');
      }

      document
        .getElementById(`node-${node.row}-${node.col}`)
        .classList.remove('node-visited');
      document
        .getElementById(`node-${node.row}-${node.col}`)
        .classList.remove('node-shortest-path');
    }
    this.setState({
      disableNodesButton: false,
      disableMazesButton: false,
      disableClearMazeButton: false,
    });
  }

  clearPath() {
    const { grid } = this.state;
    for (let i = 0; i < grid.length; i++) {
      const node = grid[i];
      node.isVisited = false;

      if (node.isStart) {
        document
          .getElementById(`node-${node.row}-${node.col}`)
          .classList.remove('node-shortest-path-start');
        document
          .getElementById(`node-${node.row}-${node.col}`)
          .classList.add('node-start');
      }
      if (node.isWeight) {
        document
          .getElementById(`node-${node.row}-${node.col}`)
          .classList.remove('node-shortest-path-weight');
        document
          .getElementById(`node-${node.row}-${node.col}`)
          .classList.remove('node-visited-weight');
        document
          .getElementById(`node-${node.row}-${node.col}`)
          .classList.add('node-weight');
      }
      if (node.isFinish) {
        document
          .getElementById(`node-${node.row}-${node.col}`)
          .classList.remove('node-shortest-path-finish');
        document
          .getElementById(`node-${node.row}-${node.col}`)
          .classList.add('node-finish');
      }

      document
        .getElementById(`node-${node.row}-${node.col}`)
        .classList.remove('node-visited');
      document
        .getElementById(`node-${node.row}-${node.col}`)
        .classList.remove('node-shortest-path');
    }
    this.setState({
      disableNodesButton: false,
      disableClearMazeButton: false,
    });
  }

  selectAlgorithm() {
    const algorithm = parseInt(
      document.getElementById('pathFindingAlgoDropDown').value
    );
    if (algorithm === 0) {
      alert('Select an algorithm');
      return;
    }
    this.visualizeAlgorithms(algorithm);
  }

  visualizeAlgorithms(algorithm) {
    this.setState({
      disableClearMazeButton: true,
      disableMazesButton: true,
      disableNodesButton: true,
      modifyingNodeState: 0,
    });

    const {
      grid,
      START_NODE_ROW,
      START_NODE_COL,
      FINISH_NODE_ROW,
      FINISH_NODE_COL,
    } = this.state;

    const d2Grid = c1Dto2D(grid, ROWS, COLS);
    const STARTNODE = d2Grid[START_NODE_ROW][START_NODE_COL];
    const FINISHNODE = d2Grid[FINISH_NODE_ROW][FINISH_NODE_COL];

    var visitedNodesInOrder = [],
      nodesInShortestPathOrder = [];
    switch (algorithm) {
      case 0:
        alert('Select an algorithm');
        this.setState({ disableNodesButton: false, disableMazesButton: false });
        return;
      case 1:
        [visitedNodesInOrder, nodesInShortestPathOrder] = DijkstraND(
          d2Grid,
          STARTNODE,
          FINISHNODE
        );
        break;
      case 2:
        [visitedNodesInOrder, nodesInShortestPathOrder] = BFSND(
          d2Grid,
          STARTNODE,
          FINISHNODE
        );
        break;
      case 3:
        [visitedNodesInOrder, nodesInShortestPathOrder] = DFSND(
          d2Grid,
          STARTNODE,
          FINISHNODE
        );
        break;
      case 4:
        const [
          sourceVisited,
          destinationVisited,
          sourcePathNodes,
          destinationPathNodes,
        ] = BiDirectionalSearch(d2Grid, STARTNODE, FINISHNODE);

        this.animatePath(sourceVisited, sourcePathNodes);
        this.animatePath(destinationVisited, destinationPathNodes);
        return;
      case 5:
        [visitedNodesInOrder, nodesInShortestPathOrder] = BFSWD(
          d2Grid,
          STARTNODE,
          FINISHNODE
        );
        break;
      case 6:
        [visitedNodesInOrder, nodesInShortestPathOrder] = DFSWD(
          d2Grid,
          STARTNODE,
          FINISHNODE
        );
        break;
      case 7:
        [visitedNodesInOrder, nodesInShortestPathOrder] = DijkstraWD(
          d2Grid,
          STARTNODE,
          FINISHNODE
        );
        break;
      default:
        return;
    }
    this.animatePath(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  toggleStartOrFinish(grid = [], row, col, NODE_ROW, NODE_COL, nodeType) {
    const newGrid = grid.slice();
    const currentNode = grid[ROWS * NODE_ROW + NODE_COL];
    const newNode = grid[ROWS * row + col];
    if (nodeType === 'START') {
      if (newNode.isWall || newNode.isWeight || newNode.isFinish) {
        return false;
      } else {
        currentNode.isStart = false;
        newNode.isStart = true;
        this.setState({ grid: newGrid });
        return true;
      }
    } else if (nodeType === 'FINISH') {
      if (newNode.isWall || newNode.isWeight || newNode.isFinish) {
        return false;
      } else {
        currentNode.isFinish = false;
        newNode.isFinish = true;
        this.setState({ grid: newGrid });
        return true;
      }
    } else {
      return false;
    }
  }

  toggleWall(grid, row, col) {
    const newGrid = grid.slice();
    const currentNode = grid[ROWS * row + col];
    if (
      !currentNode.isStart &&
      !currentNode.isFinish &&
      !currentNode.isWeight
    ) {
      currentNode.isWall = !currentNode.isWall;
      this.setState({ grid: newGrid });
    }
  }

  toggleWeight(grid, row, col) {
    const newGrid = grid.slice();
    const currentNode = grid[ROWS * row + col];
    if (!currentNode.isStart && !currentNode.isFinish && !currentNode.isWall) {
      currentNode.isWeight = !currentNode.isWeight;
      this.setState({ grid: newGrid, Weight: true });
    }
  }

  handleNodeOperations(row, col, NODE_STATE) {
    const {
      START_NODE_ROW,
      START_NODE_COL,
      FINISH_NODE_ROW,
      FINISH_NODE_COL,
      grid,
    } = this.state;
    switch (NODE_STATE) {
      case 1:
        if (
          this.toggleStartOrFinish(
            grid,
            row,
            col,
            START_NODE_ROW,
            START_NODE_COL,
            'START'
          )
        ) {
          this.setState({
            START_NODE_ROW: row,
            START_NODE_COL: col,
          });
        }
        break;
      case 2:
        if (
          this.toggleStartOrFinish(
            grid,
            row,
            col,
            FINISH_NODE_ROW,
            FINISH_NODE_COL,
            'FINISH'
          )
        ) {
          this.setState({
            FINISH_NODE_ROW: row,
            FINISH_NODE_COL: col,
          });
        }
        break;
      case 3:
        this.toggleWall(grid, row, col);
        break;
      case 4:
        this.toggleWeight(grid, row, col);
        // this.setState({ Weight: true });
        break;
      default:
        break;
    }
  }

  modifyNodeState(STATE) {
    this.setState({ modifyingNodeState: STATE });
  }

  generateMaze(grid) {
    this.setState({ disableMazesButton: true, disableClearMazeButton: false });
    const twoDArray = c1Dto2D(grid, ROWS, COLS);
    const mazeGrid = Maze(twoDArray, ROWS, COLS);
    const oneDArray = c2Dto1D(mazeGrid);
    this.setState({ grid: oneDArray });
  }

  generateWeightMaze(grid) {
    this.setState({ disableMazesButton: true, disableClearMazeButton: false });
    const twoDArray = c1Dto2D(grid, ROWS, COLS);
    const mazeGrid = WeightMaze(twoDArray, ROWS, COLS);
    const oneDArray = c2Dto1D(mazeGrid);
    this.setState({ grid: oneDArray, Weight: true });
  }

  animatePath(visitedNodesInOrder = [], nodesInShortestPathOrder = []) {
    this.setState({ disableNodesButton: true });
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, this.state.speed * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        if (!node.isStart && !node.isFinish && !node.isWall && !node.isWeight) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            'node node-visited';
        }
        if (node.isWeight) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            'node node-visited-weight';
        }
      }, this.state.speed * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        if (node.isStart) {
          document.getElementById(`node-${node.row}-${node.col}`).classList =
            'node node-shortest-path-start';
        }
        if (!node.isFinish && !node.isStart && !node.isWall && !node.isWeight) {
          document.getElementById(`node-${node.row}-${node.col}`).classList =
            'node node-shortest-path';
        }
        if (node.isWeight) {
          document.getElementById(`node-${node.row}-${node.col}`).classList =
            'node node-shortest-path-weight';
        }
        if (node.isFinish) {
          document.getElementById(`node-${node.row}-${node.col}`).classList =
            'node node-shortest-path-finish';
          setTimeout(() => {
            this.setState({ disableClearMazeButton: false });
          }, this.state.speed * (i - 1));
        }
      }, this.state.speed * i);
    }
  }

  render() {
    const {
      grid,
      modifyingNodeState,
      disableMazesButton,
      disableNodesButton,
      disableClearMazeButton,
      Weight,
    } = this.state;
    console.log(Weight);
    return (
      <div>
        <Bar />
        <div className='container'>
          <div className='row'>
            <div className='col-sm-7 mb-1'>
              <div className='box shadowT mb-2'>
                <div id='grid' className='grid'>
                  {grid.map((node, idx) => {
                    const {
                      row,
                      col,
                      isStart,
                      isFinish,
                      isWall,
                      isWeight,
                    } = node;
                    return (
                      <Node
                        key={idx}
                        col={col}
                        isFinish={isFinish}
                        isStart={isStart}
                        isWall={isWall}
                        isWeight={isWeight}
                        row={row}
                        onNodeClick={(row, col) =>
                          this.handleNodeOperations(
                            row,
                            col,
                            modifyingNodeState
                          )
                        }
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className='col-sm-5'>
              <div className='btn-group btn-block mt-2'>
                <button
                  type='button'
                  disabled={disableNodesButton}
                  className='ui black button'
                  onClick={() => this.modifyNodeState(START_NODE_STATE)}
                >
                  Place Source
                </button>
                <button
                  type='button'
                  disabled={disableNodesButton}
                  className='ui black button'
                  onClick={() => this.modifyNodeState(END_NODE_STATE)}
                >
                  Place Destination
                </button>

                <button
                  type='button'
                  disabled={disableNodesButton}
                  className='ui black button'
                  onClick={() => this.modifyNodeState(WALL_NODE_STATE)}
                >
                  Place Wall
                </button>
              </div>
              <div className='btn-group btn-block mt-2'>
                <button
                  type='button'
                  disabled={disableMazesButton}
                  className='ui black button'
                  onClick={() => this.generateMaze(grid)}
                >
                  Generate Maze
                </button>
                <button
                  type='button'
                  disabled={disableClearMazeButton}
                  className='ui black button'
                  onClick={() => this.clearBoard()}
                >
                  Clear Maze
                </button>
                <button
                  type='button'
                  disabled={disableClearMazeButton}
                  className='ui black button'
                  onClick={() => this.clearPath()}
                >
                  Clear Path
                </button>
              </div>
              <div className='btn-group btn-block mt-2'>
                <button
                  type='button'
                  disabled={disableMazesButton}
                  className='ui black button'
                  onClick={() => this.generateWeightMaze(grid)}
                >
                  Generate Weighted Maze
                </button>
                <button
                  type='button'
                  disabled={disableNodesButton}
                  className='ui black button'
                  onClick={() => this.modifyNodeState(WEIGHT_NODE_STATE)}
                >
                  Place Weight
                </button>
              </div>
              <br />
              <br />
              <div className='btn-group btn-block mt-2'>
                <div className='input-group'>
                  <select
                    disabled={disableNodesButton}
                    id='pathFindingAlgoDropDown'
                    className='mr-2 custom-select'
                    defaultValue='0'
                  >
                    <option disabled value='0'>
                      Select Algorithm
                    </option>
                    {Weight ? (
                      <option value='1'>
                        Dijkstras (Diagonal Not Allowed)
                      </option>
                    ) : (
                      ''
                    )}
                    {Weight ? (
                      ''
                    ) : (
                      <option value='2'>BFS (Diagonal Not Allowed)</option>
                    )}
                    {Weight ? (
                      ''
                    ) : (
                      <option value='3'>DFS (Diagonal Not Allowed)</option>
                    )}
                    {/* <option value='4'>
                      BiDirectionalSearch (Diagonal Not Allowed)
                    </option> */}
                    {Weight ? (
                      ''
                    ) : (
                      <option value='5'>BFS (Diagonal Allowed)</option>
                    )}
                    {Weight ? (
                      ''
                    ) : (
                      <option value='6'>DFS (Diagonal Allowed)</option>
                    )}
                    {Weight ? (
                      <option value='7'>Dijkstras (Diagonal Allowed)</option>
                    ) : (
                      ''
                    )}
                  </select>
                  <div className='input-group-append'>
                    <button
                      disabled={disableNodesButton}
                      onClick={() => this.selectAlgorithm()}
                      className='ui green button'
                    >
                      Perform Search
                    </button>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <Legend />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
