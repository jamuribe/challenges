// Bubble Sort


function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true;
      }
    }
  } while (swapped);
  return arr;

}
console.log(bubbleSort([3, 5, 2, 5, 6]))

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {

    for (let o = i; o > 0; o--) {
      if (arr[o] > arr[o - 1]) continue;
      if (arr[o] < arr[o - 1]) {
        [arr[o - 1], arr[o]] = [arr[o], arr[o - 1]]
      }
    }
  }
  return arr;
}

console.log(insertionSort([6, 5, 4, 3, 2, 1, 0]))

module.exports = insertionSort;
