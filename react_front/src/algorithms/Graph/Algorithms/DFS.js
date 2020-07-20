export function DFS(grid = [], startNode, finishNode) {
  const visitedInOrder = [];
  dfsRecursion(grid, startNode, finishNode, visitedInOrder);
  return [visitedInOrder, calculatePath(finishNode)];
}

function dfsRecursion(grid = [], node, finishNode, visitedInOrder) {
  node.isVisited = true;
  const x = [0, 0, 1, -1];
  const y = [1, -1, 0, 0];
  for (let i = 0; i < 4; i++) {
    const { row, col } = node;
    const newRow = row + x[i];
    const newCol = col + y[i];
    if (
      !(
        newRow >= 0 &&
        newCol >= 0 &&
        newRow < grid.length &&
        newCol < grid[0].length
      )
    )
      continue;
    const neighbour = grid[newRow][newCol];

    if (neighbour.isWall === true || neighbour.isVisited === true) {
      continue;
    }
    neighbour.previousNode = node;
    visitedInOrder.push(node);
    if (neighbour === finishNode) {
      return [visitedInOrder, calculatePath(finishNode)];
    }
    return dfsRecursion(grid, neighbour, finishNode, visitedInOrder);
  }
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
