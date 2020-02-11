let p1 = new Promise(function(res, rej) {
  res([1, 2, 3, 4]);
});

p1.then(function(arr) {
  console.log(`Promise p1 resolved with data: ${arr}`);
});

let p2 = new Promise(function(res, rej) {
  rej("ERROR");
});

p2.then(function(data) {
  console.log(`Promise p2 resolved with data: ${data}`);
}).catch(function(data) {
  console.log(`Promise p2 rejected with data: ${data}`);
});
