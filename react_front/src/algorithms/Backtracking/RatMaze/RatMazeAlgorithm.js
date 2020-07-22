export function MakeBoard(size) {
  let sol = [];
  for (let i = 0; i < size; i++) {
    let temp = [];
    for (let j = 0; j < size; j++) {
      temp.push(0);
    }
    sol.push(temp);
  }
  return sol;
}

function solve(maze = [], x, y, sol = [], animations = []) {
  let M = maze.length - 1;
  let N = maze[0].length - 1;
  if (x === M && y === N && maze[x][y] === 1) {
    sol[x][y] = 1;
    animations.push([x, y, true]);
    return true;
  }
  if (isSafe(maze, x, y)) {
    animations.push([x, y, true]);
    sol[x][y] = 1;

    if (solve(maze, x, y + 1, sol, animations)) {
      return true;
    }

    if (solve(maze, x + 1, y, sol, animations)) {
      return true;
    }

    // if (solve(maze, x - 1, y, sol, animations)) {
    //   return true;
    // }
    // if (solve(maze, x, y - 1, sol, animations)) {
    //   return true;
    // }
    animations.push([x, y, false]);
    sol[x][y] = 0;
    return false;
  }
  return false;
}

function isSafe(maze = [], x, y) {
  let R = maze.length;
  let C = maze[0].length;
  return x >= 0 && x < R && y >= 0 && y < C && maze[x][y] === 1;
}

export function RatMazeAlgorithm(maze = [], sol = []) {
  const animations = [];
  if (!solve(maze, 0, 0, sol, animations)) {
    console.log("Solution doesn't exists for the given maze");
    return [sol, []];
  }
  return [sol, animations];
}
