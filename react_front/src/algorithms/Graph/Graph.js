import React, { Component } from 'react';
import { Legend } from './Utils/Legend';
import { c1Dto2D, c2Dto1D } from './Utils/Conversion';
//import Node from './Node/Node';
import Dijkstra from './Algorithms/Dijkstra';
import Maze from './Maze/Maze';
import './Graph.css';

const ROWS = 37;
const COLS = 37;
const START_NODE_STATE = 1;
const END_NODE_STATE = 2;
const WALL_NODE_STATE = 3;
const SPEED = 25;

export default class Graph extends Component {
  render() {
    return <div>Graph Algorithm</div>;
  }
}
