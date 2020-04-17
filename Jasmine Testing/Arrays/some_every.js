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

// SOME_EVERY EXERCISE //

function hasOddNumber(arr) {
  return arr.some(function (val) {
    return val % 2 !== 0;
  });
}

function hasAZero(num) {
  return num
    .toString()
    .split("")
    .some(function (val) {
      return val === "0";
    });
}

function hasOnlyOddNumbers(arr) {
  return arr.every(function (val) {
    return val % 2 !== 0;
  });
}

function hasNoDuplicates(arr) {
  return arr.every(function (val) {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}

function hasCertainKey(arr, key) {
  return arr.every(function (val) {
    return key in val;
  });
}

function hasCertainValue(arr, key, searchValue) {
  return arr.every(function (val) {
    return val[key] === searchValue;
  });
}
