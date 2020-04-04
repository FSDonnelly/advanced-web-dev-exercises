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
