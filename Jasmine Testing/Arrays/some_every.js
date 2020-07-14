let someEveryArr = [1, 2, 3];

someEveryArr.some((value, index, array) => {
  console.log(value < 2);
  return value < 2;
});

console.log(someEveryArr);
function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

function hasEvenNumber(someEveryArr) {
  return someEveryArr.some((value) => {
    return value % 2 === 0;
  });
}
// console.log(arr);
let evenArr = [1, 2, 3, 4];
hasEvenNumber(evenArr);
let oddArr = [1, 3, 5];
hasEvenNumber(oddArr);

// SOME_EVERY EXERCISE //

function hasOddNumber(someEveryArr) {
  return someEveryArr.some(function (val) {
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

function hasOnlyOddNumbers(someEveryArr) {
  return someEveryArr.every(function (val) {
    return val % 2 !== 0;
  });
}

function hasNoDuplicates(someEveryArr) {
  return someEveryArr.every(function (val) {
    return someEveryArr.indexOf(val) === someEveryArr.lastIndexOf(val);
  });
}

function hasCertainKey(someEveryArr, key) {
  return someEveryArr.every(function (val) {
    return key in val;
  });
}

function hasCertainValue(someEveryArr, key, searchValue) {
  return someEveryArr.every(function (val) {
    return val[key] === searchValue;
  });
}
