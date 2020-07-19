export function Dijkstra(grid, startNode, finishNode) {
  const visitedOrder = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);
  while (!!unvisitedNodes.length) {
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
    updateUnvisitedNeighbours(closestNode, grid);
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

function unvisitedNeighbours(node, grid) {
  const neighbours = [];
  const { row, col } = node;
  if (row > 0) {
    neighbours.push(grid[row - 1][col]);
  }
  if (row < grid.length - 1) {
    neighbours.push(grid[row + 1][col]);
  }
  if (col > 0) {
    neighbours.push(grid[row][col - 1]);
  }
  if (col < grid[0].length - 1) {
    neighbours.push(grid[row][col + 1]);
  }
  return neighbours.filter((neighbour) => !neighbour.isVisited);
}

function updateUnvisitedNeighbours(node, grid) {
  const unvisitedNeighbours = unvisitedNeighbours(node, grid);
  for (const neighbour of unvisitedNeighbours) {
    neighbour.distance = node.distance + 1;
    neighbour.previousNode = node;
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
