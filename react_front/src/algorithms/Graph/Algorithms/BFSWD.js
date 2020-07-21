export function BFSWD(grid = [], startNode, finishNode) {
  const queue = [];
  const visitedInOrder = [];
  startNode.isVisited = true;
  queue.push(startNode);
  while (!queue.empty) {
    const node = queue.shift();
    if (node === finishNode) {
      return [visitedInOrder, calculatePath(finishNode)];
    }
    if (node.isWall || node.isWeight) {
      continue;
    }
    const neighbours = getAllNeighbours(grid, node);
    for (const neighbour of neighbours) {
      neighbour.previousNode = node;
      neighbour.isVisited = true;
      visitedInOrder.push(neighbour);
      queue.push(neighbour);
    }
  }
  return [visitedInOrder, calculatePath(finishNode)];
}

function getAllNeighbours(grid = [], node) {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const { row, col } = node;
  const neighbours = [];
  if (
    row + 1 >= 0 &&
    row + 1 < ROWS &&
    col >= 0 &&
    col < COLS &&
    !grid[row + 1][col].isVisited &&
    !grid[row + 1][col].isWall
  ) {
    neighbours.push(grid[row + 1][col]);
  }
  if (
    row - 1 >= 0 &&
    row - 1 < ROWS &&
    col >= 0 &&
    col < COLS &&
    !grid[row - 1][col].isVisited &&
    !grid[row - 1][col].isWall
  ) {
    neighbours.push(grid[row - 1][col]);
  }
  if (
    row >= 0 &&
    row < ROWS &&
    col + 1 >= 0 &&
    col + 1 < COLS &&
    !grid[row][col + 1].isVisited &&
    !grid[row][col + 1].isWall
  ) {
    neighbours.push(grid[row][col + 1]);
  }
  if (
    row >= 0 &&
    row < ROWS &&
    col - 1 >= 0 &&
    col - 1 < COLS &&
    !grid[row][col - 1].isVisited &&
    !grid[row][col - 1].isWall
  ) {
    neighbours.push(grid[row][col - 1]);
  }
  if (
    row - 1 >= 0 &&
    row - 1 < ROWS &&
    col - 1 >= 0 &&
    col - 1 < COLS &&
    !grid[row - 1][col - 1].isVisited &&
    !grid[row - 1][col - 1].isWall
  ) {
    neighbours.push(grid[row - 1][col - 1]);
  }
  if (
    row + 1 >= 0 &&
    row + 1 < ROWS &&
    col - 1 >= 0 &&
    col - 1 < COLS &&
    !grid[row + 1][col - 1].isVisited &&
    !grid[row + 1][col - 1].isWall
  ) {
    neighbours.push(grid[row + 1][col - 1]);
  }
  if (
    row - 1 >= 0 &&
    row - 1 < ROWS &&
    col + 1 >= 0 &&
    col + 1 < COLS &&
    !grid[row - 1][col + 1].isVisited &&
    !grid[row - 1][col + 1].isWall
  ) {
    neighbours.push(grid[row - 1][col + 1]);
  }
  if (
    row + 1 >= 0 &&
    row + 1 < ROWS &&
    col + 1 >= 0 &&
    col + 1 < COLS &&
    !grid[row + 1][col + 1].isVisited &&
    !grid[row + 1][col + 1].isWall
  ) {
    neighbours.push(grid[row + 1][col + 1]);
  }
  return neighbours;
}

function calculatePath(finishNode) {
  const shortestPathNodes = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    shortestPathNodes.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return shortestPathNodes;
}
