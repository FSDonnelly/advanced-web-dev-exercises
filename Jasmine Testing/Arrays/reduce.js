function extractValue(arr, key) {
  return arr.reduce(function (acc, next) {
    acc.push(next[key]);
    return acc;
  }, []);
}
var arr = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];
extractValue(arr, "name"); // ['Elie', 'Tim', 'Matt', 'Colt'

function vowelCount(str) {
  var vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .reduce(function (acc, next) {
      if (vowels.indexOf(next) !== -1) {
        if (acc[next]) {
          acc[next]++;
        } else {
          acc[next] = 1;
        }
      }
      return acc;
    }, {});
}
vowelCount("Elie"); // {e:2,i:1};
vowelCount("Tim"); // {i:1};
vowelCount("Matt"); // {a:1})
vowelCount("hmmm"); // {};
vowelCount("I Am awesome and so are you"); // {i: 1, a: 4, e: 3, o: 3, u: 1};

function addKeyAndValue(arr, key, value) {
  return arr.reduce(function (acc, next, idx) {
    acc[idx][key] = value;
    return acc;
  }, arr);
}
var arr = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];
addKeyAndValue(arr, "title", "Instructor")[ //
  ({ title: "Instructor", name: "Elie" },
  { title: "Instructor", name: "Tim" },
  { title: "Instructor", name: "Matt" },
  { title: "Instructor", name: "Colt" })
];

function partition(arr, callback) {
  return arr.reduce(
    function (acc, next) {
      if (callback(next)) {
        acc[0].push(next);
      } else {
        acc[1].push(next);
      }
      return acc;
    },
    [[], []]
  );
}

function isEven(val) {
  return val % 2 === 0;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

partition(arr, isEven); // [[2,4,6,8], [1,3,5,7]];

function isLongerThanThreeCharacters(val) {
  return val.length > 3;
}

var names = ["Elie", "Colt", "Tim", "Matt"];

partition(names, isLongerThanThreeCharacters); // [['Elie', 'Colt', 'Matt'], ['Tim']]
