var strings = ["my", "forEach", "example"];

var result = "";
forEach(strings, function(str, index, array) {
  if (array.length - 1 !== index) {
    result += str + " ";
  } else {
    result += str + "!!!";
  }
});

function forEach(strings, callback) {
  for (var i = 0; i < strings.length; i++) {
    callback(strings[i], i, strings);
  }
}
console.log(result);
