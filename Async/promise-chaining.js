let promise = new Promise((res, rej) => {
  setTimeout(() => {
    randomInt = Math.floor(Math.random() * 10);
    res(randomInt);
  }, 3000);
});

promise
  .then(data => {
    console.log(`Random int passed to resolve: ${data}`);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(Math.floor(Math.random() * 10));
      }, 500);
    });
  })
  .then(data => {
    console.log(`Second random int passed to resolve: ${data}`);
  });
