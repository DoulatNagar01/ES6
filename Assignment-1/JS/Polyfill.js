// filter polyfill

let arr = [1, 2, 3, 4, 5];
function filterPolyFill(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
function greaterThanTwo(x) {
  if (x > 2) {
    return x;
  }
}
console.log(filterPolyFill(arr, greaterThanTwo));

// reducePoly
// function reducePoly(arr, cb, initial = arr[0]) {
//   let acc = initial;
//   for (let i = 1; i < arr.length; i++) {
//     acc = cb(arr[i], acc);
//   }
//   return acc;
// }
// function sum(x, acc) {
//   return x + acc;
// }
// console.log(reducePoly(arr, sum));