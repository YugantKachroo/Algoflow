export const SelectionSortAlgorithm = (array) => {
  let animations = [];
  let auxillaryArray = array;
  SelectionSort(auxillaryArray, animations);
  let sortedArray = array.slice.sort((a, b) => a - b);
  console.log(areEqualCheck(sortedArray, auxillaryArray));
  array = auxillaryArray;
  return [animations, array];
};

function areEqualCheck(sortedArray, auxillaryArray) {
  if (sortedArray.length !== auxillaryArray.length) return false;
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] !== auxillaryArray[i]) return false;
  }
  return true;
}

function SelectionSort(auxillaryArray, animations) {
  const N = auxillaryArray.length;
  for (let i = 0; i < N - 1; i++) {
    let minElementIndex = i;
    for (let j = i + 1; j < N; j++) {
      animations.push(['colorChange', j, minElementIndex]);
      animations.push(['colorOriginal', j, minElementIndex]);
      if (auxillaryArray[j] < auxillaryArray[minElementIndex]) {
        minElementIndex = j;
      }
    }
    animations.push(['swapHeight', minElementIndex, auxillaryArray[i]]);
    animations.push(['swapHeight', i, auxillaryArray[minElementIndex]]);
    let temp = auxillaryArray[i];
    auxillaryArray[i] = auxillaryArray[minElementIndex];
    auxillaryArray[minElementIndex] = temp;
  }
}
