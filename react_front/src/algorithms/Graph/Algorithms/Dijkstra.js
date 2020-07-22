export function Dijkstra(grid, startNode, finishNode) {
  const visitedOrder = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);
  let N = unvisitedNodes.length;
  while (N--) {
    const closestNode = getClosestNeighbour(unvisitedNodes);
    if (closestNode === null) {
      return [visitedOrder, calculatePath(finishNode)];
    }

    if (closestNode.distance === Infinity) {
      return [visitedOrder, calculatePath(finishNode)];
    }
    closestNode.isVisited = true;
    visitedOrder.push(closestNode);

    if (closestNode === finishNode) {
      return [visitedOrder, calculatePath(finishNode)];
    }
    const x = [0, 0, 1, -1];
    const y = [1, -1, 0, 0];

    for (let i = 0; i < 4; ++i) {
      const { col, row } = closestNode;
      const nRow = row + x[i];
      const nCol = col + y[i];
      if (
        !(nRow >= 0 && nRow >= 0 && nCol < grid.length && nCol < grid[0].length)
      )
        continue;
      const neighbor = grid[nRow][nCol];
      if (neighbor.isVisited == true) {
        continue;
      }
      if (closestNode.distance + 1 < neighbor.distance) {
        let edge_wt = 1;
        if (neighbor.isWeight) edge_wt += 1;
        neighbor.distance = closestNode.distance + edge_wt;
        neighbor.previousNode = closestNode;
      }
    }
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

function getClosestNeighbour(grid) {
  let minDistance = Infinity;
  let closest = null;
  for (const node of grid) {
    if (node.isVisited) {
      continue;
    }
    if (node.distance < minDistance) {
      closest = node;
      minDistance = node.distance;
    }
  }
  return closest;
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
