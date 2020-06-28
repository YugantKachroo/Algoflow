export function binarySearchAnimations(
  array,
  left,
  right,
  element,
  animations = []
) {
  if (right >= left) {
    let mid = parseInt(left + (right - left) / 2);
    if (array[mid] === element) {
      animations.push([left, right, mid, true]);
      return true;
    } else if (array[mid] > element) {
      animations.push([left, right, mid, false]);
      binarySearchAnimations(array, left, mid - 1, element, animations);
    } else {
      animations.push([left, right, mid, false]);
      binarySearchAnimations(array, mid + 1, right, element, animations);
    }
    return false;
  }
}

// binarySearchAnimations(array, left, right, element, animations = []) {
//   while (left <= right) {
//     let mid = parseInt(left + (right - left) / 2);
//     if (array[mid] === element) {
//       animations.push([left, right, mid, true]);
//       return true;
//     } else if (array[mid] > element) {
//       animations.push([left, right, mid, false]);
//       right = mid - 1;
//     } else {
//       animations.push([left, right, mid, false]);
//       left = mid + 1;
//     }
//     return false;
//   }
// }
