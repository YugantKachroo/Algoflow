export function MergeSortAlgorithm(array) {
  let animations = [];
  let auxillaryArray = array.slice();
  MergeSort(auxillaryArray, 0, auxillaryArray.length - 1, animations);
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

function MergeSort(auxillaryArray, startIndex, endIndex, animations) {
  if (startIndex === endIndex) return;

  const midIndex = Math.floor((endIndex + startIndex) / 2);
  MergeSort(auxillaryArray, startIndex, midIndex, animations);
  MergeSort(auxillaryArray, midIndex + 1, endIndex, animations);
  Merge(auxillaryArray, startIndex, midIndex, endIndex, animations);
}

function Merge(auxillaryArray, startIndex, middleIndex, endIndex, animations) {
  let sortArray = [];
  let i = startIndex;
  let j = middleIndex + 1;
  while (i <= middleIndex && j <= endIndex) {
    animations.push(['comparison1', i, j]);
    animations.push(['comparison2', i, j]);
    if (auxillaryArray[i] <= auxillaryArray[j]) {
      animations.push([
        'swapHeight',
        sortArray.length + startIndex,
        auxillaryArray[i],
      ]);
      sortArray.push(auxillaryArray[i++]);
    } else {
      animations.push([
        'swapHeight',
        sortArray.length + startIndex,
        auxillaryArray[j],
      ]);
      sortArray.push(auxillaryArray[j++]);
    }
  }
  while (i <= middleIndex) {
    animations.push(['comparison1', i, i]);
    animations.push(['comparison2', i, i]);
    animations.push([
      'swapHeight',
      sortArray.length + startIndex,
      auxillaryArray[i],
    ]);
    sortArray.push(auxillaryArray[i++]);
  }
  while (j <= endIndex) {
    animations.push(['comparison1', j, j]);
    animations.push(['comparison2', j, j]);
    animations.push([
      'swapHeight',
      sortArray.length + startIndex,
      auxillaryArray[j],
    ]);
    sortArray.push(auxillaryArray[j++]);
  }
  for (let i = startIndex; i <= endIndex; i++) {
    auxillaryArray[i] = sortArray[i - startIndex];
  }
}
