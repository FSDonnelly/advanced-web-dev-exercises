let arr = [1, 2, 3];

arr.some((value, index, array) => {
  console.log(value < 2);
  return value < 2;
});

console.log(arr);
function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

function hasEvenNumber(arr) {
  return arr.some((value) => {
    return value % 2 === 0;
  });
}
// console.log(arr);
let evenArr = [1, 2, 3, 4];
hasEvenNumber(evenArr);
let oddArr = [1, 3, 5];
hasEvenNumber(oddArr);
