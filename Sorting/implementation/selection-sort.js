let arr = [65, 25, 12, 22, 11, 23, 28, 28, 77, 25, 77, 38, 20];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
}
console.log(arr);
