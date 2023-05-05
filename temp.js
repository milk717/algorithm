const arr = new Array(3).fill(0);
const arr2 = arr.map(v => v);
const arr3 = arr.sort((a, b) => a - b);

arr[0] = 1
console.log(arr,arr2,arr3)
