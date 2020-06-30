export function InsertionSortAlgorithm(array) {
  let animations = [];
  let auxillaryArray = array.slice();
  InsertionSort(auxillaryArray, animations);
  const sortedArray = array.slice().sort((a, b) => a - b);
  console.log(areEqualCheck(sortedArray, auxillaryArray));
  array = auxillaryArray;
  return [animations, array];
}

function areEqualCheck(sortedArray, auxillaryArray) {
  if (sortedArray.length !== auxillaryArray.length) return false;
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] !== auxillaryArray[i]) return false;
  }
  return true;
}

function InsertionSort(auxillaryArray, animations) {
  const N = auxillaryArray.length;
  for (let i = 1; i < N; i++) {
    let key = auxillaryArray[i];
    let j = i - 1;
    animations.push(['comparison1', j, i]);
    animations.push(['comparison2', j, i]);
    while (j >= 0 && auxillaryArray[j] > key) {
      animations.push(['swapHeight', j + 1, auxillaryArray[j]]);
      auxillaryArray[j + 1] = auxillaryArray[j];
      j = j - 1;
      if (j < 0) {
      } else {
        animations.push(['comparison1', j, i]);
        animations.push(['comparison2', j, i]);
      }
    }
    animations.push(['swapHeight', j + 1, key]);
    auxillaryArray[j + 1] = key;
  }
}
