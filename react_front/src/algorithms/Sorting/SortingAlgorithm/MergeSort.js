export function MergeSortAlgorithm(array) {
  let animations = [];
  let auxillaryArray = array;
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
  if (startIndex < endIndex) {
    const midIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
    MergeSort(auxillaryArray, startIndex, midIndex, animations);
    MergeSort(auxillaryArray, midIndex + 1, endIndex, animations);
    Merge(auxillaryArray, startIndex, midIndex, endIndex, animations);
  }
}

function Merge(auxillaryArray, startIndex, midIndex, endIndex, animations) {
  let sortArray = [];
  let i = startIndex;
  let j = midIndex + 1;
  while (i < midIndex + 1 && j < endIndex) {
    animations.push(['comparison1', i, j]);
    animations.push(['comparison2', i, j]);
    if (auxillaryArray[i] < auxillaryArray[j]) {
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
  while (i <= midIndex) {
    animations.push(['comparison1', i, midIndex]);
    animations.push(['comparison2', i, midIndex]);
    animations.push([
      'swapHeight',
      sortArray.length + startIndex,
      auxillaryArray[i],
    ]);
    sortArray.push(auxillaryArray[i++]);
  }
  while (j <= midIndex) {
    animations.push(['comparison1', j, midIndex]);
    animations.push(['comparison2', j, midIndex]);
    animations.push([
      'swapHeight',
      sortArray.length + startIndex,
      auxillaryArray[j],
    ]);
    sortArray.push(auxillaryArray[j++]);
  }
  for (let i = startIndex; i < endIndex; i++) {
    auxillaryArray[i] = sortArray[i - startIndex];
  }
}
