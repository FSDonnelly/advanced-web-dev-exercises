let arr = [1, 2, 3];

// forEach Examples and Exercizes
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

onlyEvenValues = arr => {
  let newArr = [];
  arr.forEach(val => {
    if (val % 2 === 0) {
      newArr.push(val);
    }
  });
  console.log(newArr);
};

onlyEvenValues([1, 2, 3]);
onlyEvenValues([5, 1, 2, 3, 10]);

showFirstAndLast = arr => {
  let newArr = [];
  arr.forEach(val => {
    newArr.push(val[0] + val[val.length - 1]);
  });
  console.log(newArr);
};

showFirstAndLast(["colt", "matt", "tim", "udemy"]);
showFirstAndLast(["hi", "goodbye", "smile"]);

addKeyAndValue = (arr, key, value) => {
  arr.forEach(val => {
    val[key] = value;
  });
  console.log(arr);
};

addKeyAndValue(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "title",
  "instructor"
);

vowelCount = str => {
  let splitArr = str.split("");
  let obj = {};
  let vowels = "aeiou";

  splitArr.forEach(letter => {
    if (vowels.indexOf(letter.toLowerCase()) !== -1) {
      if (letter in obj) {
        obj[letter]++;
      } else {
        obj[letter] = 1;
      }
    }
  });
  console.log(obj);
};

vowelCount("Elie"); // {e:2,i:1};
vowelCount("Tim"); // {i:1};
vowelCount("Matt"); // {a:1})
vowelCount("hmmm"); // {};
vowelCount("I Am awesome and so are you"); // {i: 1, a: 4, e: 3, o: 3, u: 1};

// Map Examples and Exercizes

mapArr = arr => {
  let newArr = [];
  arr.map((value, index, array) => {
    newArr.push(value * 2);
  });
  console.log(newArr);
};

mapArr([1, 2, 3]);

tripleValues = arr => {
  return arr.map(value => {
    console.log(value * 3);
  });
};

tripleValues([1, 2, 3]);

onlyFirstName = arr => {
  let newArr = [];
  arr.map(val => {
    console.log(val.first);
    newArr.push(val.first);
  });
  console.log(newArr);
};

onlyFirstName([
  { first: "Tim", last: "Garcia" },
  { first: "Matt", last: "Lane" },
  { first: "Frank", last: "Tank" }
]);

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/

doubleValues = arr => {
  let newArr = [];
  arr.map(value => {
    console.log(value * 2);
    newArr.push(value * 2);
  });
  console.log(newArr);
};
doubleValues([1, 2, 3]); // [2,4,6]
doubleValues([1, -2, -3]); // [2,-4,-6]
/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {}
