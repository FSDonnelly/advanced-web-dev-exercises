let someArr = [1, 2, 3];

someArr.some((value, index, array) => {
  console.log(value < 2);
  return value < 2;
});

console.log(someArr);
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
console.log(arr);

hasEvenNumber([1, 2, 3, 4]);
hasEvenNumber([1, 3, 5]);
