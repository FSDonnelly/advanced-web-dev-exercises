let counter = 0;

// setTimeout(() => {
//   counter++;
//   console.log(`Counter: ${counter}`);
//   setTimeout(() => {
//     counter++;
//     console.log(`Counter: ${counter}`);
//     setTimeout(() => {
//       counter++;
//       console.log(`Counter: ${counter}`);
//     }, 3000);
//   }, 2000);
// }, 1000);

// Disadvantages of Nested Callbacks
// The code is hard to read
// Logic is difficult to reason about
// the code is not modular

// Refactor nested callback code

// Create inCounter function
inCounter = () => {
  counter++;
  console.log(`Counter: ${counter}`);
};

// Create runLater function
runLater = (cb, time) => {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      let res = cb();
      resolve(res);
    }, time);
  });
  return p;
};

// Chain Promises
runLater(inCounter, 1000)
  .then(() => {
    return runLater(inCounter, 2000);
  })
  .then(() => {
    return runLater(inCounter, 3000);
  });
