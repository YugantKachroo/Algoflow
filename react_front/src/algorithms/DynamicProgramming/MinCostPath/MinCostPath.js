import React, { Component } from 'react';
import './MinCostPath.css';
import { RandomInt } from '../../../components/RandomInt';

const SIZE = 5;

export default class MinCostPath extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.drawMaze(SIZE);
  }
  drawMaze(SIZE) {}

  render() {
    return <div>ssas</div>;
  }
}
