function getNeighbours(row, col, ROWS, COLS) {
  const array = [];
  let i, j;
  for (i = 0, j = 0; i < ROWS || j < COLS; i++, j++) {
    array.push([row, i]);
    array.push([j, col]);
  }
  return array;
}

export function highlightNode(row, col, ROWS, COLS) {
  const newArray = getNeighbours(row, col, ROWS, COLS);
  for (const val of newArray) {
    const [nRow, nCol] = val;
    const node = document.getElementById(`node-${nRow}-${nCol}`);
    if (nRow === parseInt(ROWS / 2)) {
      node.classList.add('plus-center');
    } else {
      node.classList.add('plus');
    }
    if (nCol === parseInt(COLS / 2)) {
      node.classList.add('plus-center');
    } else {
      node.classList.add('plus');
    }
  }
}

export function unHighlightNode(row, col, ROWS, COLS) {
  const newArray = getNeighbours(row, col, ROWS, COLS);
  for (const val of newArray) {
    const [nRow, nCol] = val;
    const node = document.getElementById(`node-${nRow}-${nCol}`);
    if (nRow === parseInt(ROWS / 2)) {
      node.classList.add('plus-center');
    } else {
      node.classList.add('plus');
    }
    if (nCol === parseInt(COLS / 2)) {
      node.classList.add('plus-center');
    } else {
      node.classList.add('plus');
    }
  }
}

export function highlightDiagonals(nodes = [], ROWS, COLS) {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      const { row, col } = nodes[i][j];
      if (row === col) {
        document.getElementById(`node-${row}-${col}`);
        document.classList.add('plus-center');
      }
    }
  }
  for (let i = ROWS - 1; i >= 0; i--) {
    for (let j = 0; j < COLS; j++) {
      if (i + j === parseInt((ROWS - 1 + COLS) / 2)) {
        document.getElementById(`node-${i}-${j}`);
        document.classList.add('plus-center');
      }
    }
  }
}

export function unHighlightDiagonals(nodes = [], ROWS, COLS) {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      const { row, col } = nodes[i][j];
      if (row === col) {
        document.getElementById(`node-${row}-${col}`);
        document.classList.add('plus-center');
      }
    }
  }
  for (let i = ROWS - 1; i >= 0; i--) {
    for (let j = 0; j < COLS; j++) {
      if (i + j === parseInt((ROWS - 1 + COLS) / 2)) {
        document.getElementById(`node-${i}-${j}`);
        document.classList.add('plus-center');
      }
    }
  }
}
