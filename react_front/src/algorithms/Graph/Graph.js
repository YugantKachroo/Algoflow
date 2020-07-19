import React, { Component } from 'react';
import { Legend } from './Utils/Legend';
import { c1Dto2D, c2Dto1D } from './Utils/Conversion';
import {
  highlightNode,
  unHighlightNode,
  highlightDiagonals,
  unHighlightDiagonals,
} from './Utils/Highlight';
import Node from './Node/Node';
import { Dijkstra } from './Algorithms/Dijkstra';
import Maze from './Maze/Maze';
import './Graph.css';

const ROWS = 37;
const COLS = 37;
const START_NODE_STATE = 1;
const END_NODE_STATE = 2;
const WALL_NODE_STATE = 3;
const SPEED = 25;

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      modifyingNodeState: 0,
      START_NODE_ROW: 1,
      START_NODE_COL: 1,
      FINISH_NODE_ROW: ROWS - 2,
      FINISH_NODE_COL: COLS - 2,
      disableMazesButton: false,
      disableNodesButton: false,
      disableClearMazeButton: false,
      highlightMazeNodes: true,
      isGridDiagonalsHighlighted: false,
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
    let i, j;
    for (i = 0; i < ROWS; i++) {
      for (j = 0; j < COLS; j++) {
        grid.push(this.createNode(i, j));
      }
    }
    this.setState({ grid });
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
      previousNode: null,
    };
  }

  render() {
    return <div>Graph Algorithm</div>;
  }
}
