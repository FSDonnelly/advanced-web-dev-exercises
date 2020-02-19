let promise = new Promise((res, rej) => {
  setTimeout(() => {
    randomInt = Math.floor(Math.random() * 10);
    res(randomInt);
  }, 500);
});
