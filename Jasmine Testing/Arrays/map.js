//--- Map Examples and Exercizes ---//

mapArr = (arr) => {
  let newArr = [];
  arr.map((value, index, array) => {
    newArr.push(value * 2);
  });
  console.log(newArr);
};

mapArr([1, 2, 3]);

tripleValues = (arr) => {
  return arr.map((value) => {
    console.log(value * 3);
  });
};

tripleValues([1, 2, 3]);

onlyFirstName = (arr) => {
  let newArr = [];
  arr.map((val) => {
    console.log(val.first);
    newArr.push(val.first);
  });
  console.log(newArr);
};

onlyFirstName([
  { first: "Tim", last: "Garcia" },
  { first: "Matt", last: "Lane" },
  { first: "Frank", last: "Tank" },
]);

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/

function doubleValues(arr) {
  let newArr = [];
  arr.map((value) => {
    console.log(value * 2);
    newArr.push(value * 2);
  });
  console.log(newArr);
}

doubleValues([1, 2, 3]); // [2,4,6]
doubleValues([1, -2, -3]); // [2,-4,-6]
/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
  let newArr = [];
  arr.map((value, i) => {
    console.log(value * i);
    newArr.push(value * i);
  });
  console.log(newArr);
}
valTimesIndex([1, 2, 3]); // [0,2,6]
valTimesIndex([1, -2, -3]); // [0,-2,-6]
/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {
  let newArr = [];
  arr.map((key) => {
    console.log(key.name);
    newArr.push(key.name);
  });
  console.log(newArr);
}
extractKey(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "name"
); // ['Elie', 'Tim', 'Matt', 'Colt']
/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
  let newArr = [];
  arr.map((key) => {
    console.log(`${key.first} ${key.last}`);
    newArr.push(`${key.first} ${key.last}`);
  });
  console.log(newArr);
}
extractFullName([
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia" },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele" },
]); // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
