export function SelectionSortAlgorithm(array) {
  let animations = [];
  let auxillaryArray = array;
  SelectionSort(auxillaryArray, animations);
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

function SelectionSort(auxillaryArray, animations) {
  const N = auxillaryArray.length;
  for (let i = 0; i < N - 1; i++) {
    let minIndex = i; //Finding minimum element in unsorted array
    for (let j = i + 1; j < N; j++) {
      animations.push(['comparision1', j, minIndex]);
      animations.push(['comparision2', j, minIndex]);
      if (auxillaryArray[j] < auxillaryArray[minIndex]) {
        minIndex = j;
      }
    }
    animations.push(['swapHeight', minIndex, auxillaryArray[i]]);
    animations.push(['swapHeight', i, auxillaryArray[minIndex]]);
    swap(auxillaryArray, minIndex, i);
  }
}

function swap(auxillaryArray, firstIndex, secondIndex) {
  let temp = auxillaryArray[firstIndex];
  auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
  auxillaryArray[secondIndex] = temp;
}
