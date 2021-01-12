function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && key < arr[j]) {
      swap(j + 1, j, arr);
      j--;
    }
  }
  return arr;
}

const arr = [2, 5, 3, 10, 20, 12, 0, 2, 33];
console.log(insertionSort(arr));

function swap(a, b, arr) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}
