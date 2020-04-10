let someArr = [1, 2, 3];

someArr.some((value, index, array) => {
  console.log(value < 2);
  return value < 2;
});
