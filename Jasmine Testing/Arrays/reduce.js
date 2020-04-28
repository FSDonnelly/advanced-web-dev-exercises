function extractValue(arr, key) {
  return arr.reduce(function (acc, next) {
    acc.push(next[key]);
    return acc;
  }, []);
}

function vowelCount(str) {
  var vowels = "aeiou";
}

function addKeyAndValue(arr, key, value) {}

function partition(arr, callback) {}
