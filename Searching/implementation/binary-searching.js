const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function binsearch(arr, find, low, high) {
  let mid = parseInt((low + high) / 2);
  if (find === arr[mid]) {
    return [arr[mid], mid];
  }

  if (find < arr[mid]) {
    console.log("line 12 = " + binsearch(arr, find, low, mid - 1));
  } else {
    console.log("line 14 = " + binsearch(arr, find, mid + 1, high));
  }
}
console.log(binsearch(arr, 10, 0, arr.length - 1));
