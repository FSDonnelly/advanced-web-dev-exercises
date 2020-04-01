let arr = [1, 2, 3];

arr.forEach((value, index, array) => {
  console.log(value);
});

forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};
