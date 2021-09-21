// Bubble Sort

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
console.log(bubbleSort([3, 5, 2, 5, 6]));

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let o = i; o > 0; o--) {
      if (arr[o] > arr[o - 1]) continue;
      if (arr[o] < arr[o - 1]) {
        [arr[o - 1], arr[o]] = [arr[o], arr[o - 1]];
      }
    }
  }
  return arr;
}

console.log(insertionSort([6, 5, 4, 3, 2, 1, 0]));


// MERGE SORT

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let sorted = [];
  let l = arr.slice(0, Math.round(arr.length / 2))
  let r = arr.slice(Math.round(arr.length / 2))
  console.log(l, r, sorted)
  return merging(mergeSort(l), mergeSort(r), sorted)

}

function merging(arr1, arr2, arr3) {
  let l = 0;
  let r = 0;
  while (arr1.length > l && arr2.length > r) {
    if (arr1[l] <= arr2[r]) {
      arr3.push(arr1[l]);
      l++;
    } else if (arr2[r] < arr1[l]) {
      arr3.push(arr2[r]);
      r++;
    }
  }
  if (r === arr2.length || l === arr1.length) {
    !arr1[l] ? arr3.push(...arr2.slice(r)) : arr3;
    !arr2[r] ? arr3.push(...arr1.slice(l)) : arr3;
  }
  console.log(arr3, '???')
  return arr3;
}

mergeSort([0, 2, 41, 2, 25, 52, 17, 5, 81, 6, 3, 4, 52, 22, 23])