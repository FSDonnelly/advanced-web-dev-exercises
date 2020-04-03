let arr = [1, 2, 3];

arr.forEach((value, index, array) => {
  console.log(value);
});

forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};

halfValues = arr => {
  let newArr = [];
  arr.forEach(val => {
    newArr.push(val / 2);
  });
  console.log(newArr);
};

halfValues([8, 10, 12]);

doubleValues = arr => {
  let newArr = [];
  arr.forEach(val => {
    newArr.push(val * 2);
  });
  console.log(newArr);
};

doubleValues([1, 2, 3]);
doubleValues([5, 1, 2, 3, 10]);
