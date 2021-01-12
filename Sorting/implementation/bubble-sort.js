let arr = [65, 77, 25, 12];
// 65, 77, 25, 12
// 65, 25, 77, 12
// 65, 25, 12, 77

// 25, 65, 12, 77
// 25, 12, 65, 77

//12, 25, 65, 77
for (let i = 0; i < arr.length; i++) {
  let swaped = false;
  for (let j = 0; j < arr.length - i; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      swaped = true;
      if (swaped === false) {
        break;
      }
    }
  }
}
console.log(arr);
