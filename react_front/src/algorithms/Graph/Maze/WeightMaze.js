import generate from '@indutny/maze';

export function WeightMaze(grid, Row, Col) {
  const maze = generate({ width: Col, height: Row });
  for (let i = 0; i < Row; i++) {
    for (let j = 0; j < Col; j++) {
      const { row, col } = grid[i][j];
      if (grid[i][j].isStart || grid[i][j].isFinish) {
        if (row > 0) {
          maze[row - 1][col] = 0;
        } else if (row < Row - 1) {
          maze[row + 1][col] = 0;
        }
        if (col > 0) {
          maze[row][col - 1] = 0;
        } else if (col < Col - 1) {
          maze[row][col + 1] = 0;
        }
      }
    }
  }
  for (let i = 0; i < Row; i++) {
    for (let j = 0; j < Col; j++) {
      if (!grid[i][j].isStart && !grid[i][j].isFinish && maze[i][j] === 1) {
        grid[i][j].isWeight = true;
      }
    }
  }
  return grid;
}
