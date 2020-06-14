let nums = [5, 7, 1, 4, 2];
console.log(Math.max(nums)); // NAn
console.log(Math.max.apply(this, nums)); // 7

sumValues = (a, b, c) => {
  console.log(a + b + c); // 7
};

let values = [4, 2, 1];
console.log(sumValues(values)); // undefined
sumValues.apply(this, [4, 1, 2]); // 7
