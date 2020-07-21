import React, { Component } from 'react';
import './Node.css';

export default class Node extends Component {
  render() {
    const { row, col, isFinish, isStart, isWall, onNodeClick } = this.props;
    const extraClassName = isFinish
      ? 'node-finish'
      : isStart
      ? 'node-start'
      : isWall
      ? 'node-wall'
      : '';
    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onClick={() => onNodeClick(row, col)}
      ></div>
    );
  }
}
