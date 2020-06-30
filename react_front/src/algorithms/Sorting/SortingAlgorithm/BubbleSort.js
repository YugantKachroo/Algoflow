export function BubbleSortAlgorithm(array) {
  let animations = [];
  let auxillaryArray = array;
  BubbleSort(auxillaryArray, animations);
  let sortedArray = array.slice().sort((a, b) => a - b);
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

function BubbleSort(auxillaryArray, animations) {
  const N = auxillaryArray.length;
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - i - 1; j++) {
      animations.push(['comparison1', j, j + 1]);
      animations.push(['comparison2', j, j + 1]);
      if (auxillaryArray[j] > auxillaryArray[j + 1]) {
        animations.push(['swapHeight', j, auxillaryArray[j + 1]]);
        animations.push(['swapHeight', j + 1, auxillaryArray[j]]);
        swap(auxillaryArray, j, j + 1);
      } else {
        animations.push(['swapHeight', -1, -1]);
        animations.push(['swapHeight', -1, -1]);
      }
    }
  }
}

function swap(auxillaryArray, firstIndex, secondIndex) {
  let temp = auxillaryArray[firstIndex];
  auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
  auxillaryArray[secondIndex] = temp;
}
