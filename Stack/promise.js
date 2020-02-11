let p1 = new Promise(function(res, rej) {
  res([1, 2, 3, 4]);
});

p1.then(function(arr) {
  console.log(`Promise p1 resolved with data: ${arr}`);
});
