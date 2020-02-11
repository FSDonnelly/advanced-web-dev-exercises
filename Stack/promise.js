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

let p3 = new Promise(function(res, rej) {
  let num = Math.random();
  if (num < 0.5) {
    res(num);
  } else {
    rej(num);
  }
});

p3.then(function(res) {
  console.log(`Success: ${res}`);
}).catch(function(error) {
  console.log(`Error: ${error}`);
});
