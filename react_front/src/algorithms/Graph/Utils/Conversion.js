export function c1Dto2D(OdArray, Rows, Cols) {
  const Two = [];
  for (let i = 0; i < Rows; i++) {
    const arr = [];
    for (let j = 0; j < Cols; j++) {
      const { col, row } = OdArray[i * Rows + j];
      if (i === row && j === col) {
        arr.push(OdArray[i * Rows + j]);
      }
    }
    Two.push(arr);
  }
  return Two;
}
export function c2Dto1D(TdArray, Rows, Cols) {
  const one = [];
  for (let i = 0; i < Rows; i++) {
    for (let j = 0; j < Cols; j++) {
      one.push(TdArray[i][j]);
    }
  }
  return one;
}
