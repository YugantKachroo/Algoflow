export function Dijkstra(grid, startNode, finishNode) {
  const visitedOrder = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);
  while (unvisitedNodes.length) {
    sortNodes(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();
    if (closestNode.isWall) {
      continue;
    }
    if (closestNode.distance === Infinity) {
      return [visitedOrder, calculatePath(finishNode)];
    }
    closestNode.isVisited = true;
    visitedOrder.push(closestNode);

    if (closestNode === finishNode) {
      return [visitedOrder, calculatePath(finishNode)];
    }
    updateUnvisitedNeighbors(closestNode, grid);
  }
}

function getAllNodes(grid = []) {
  const nodes = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      nodes.push(grid[i][j]);
    }
  }
  return nodes;
}

function sortNodes(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function getUnvisitedNeighbors(node, grid) {
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter((neighbor) => !neighbor.isVisited);
}

function updateUnvisitedNeighbors(node, grid) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
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
