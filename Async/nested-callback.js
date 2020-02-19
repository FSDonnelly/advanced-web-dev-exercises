let counter = 0;

setTimeout(() => {
  counter++;
  console.log(`Counter: ${counter}`);
  setTimeout(() => {
    counter++;
    console.log(`Counter: ${counter}`);
    setTimeout(() => {
      counter++;
      console.log(`Counter: ${counter}`);
    }, 3000);
  }, 2000);
}, 1000);

// Disadvantages of Nested Callbacks
// The code is hard to read
// Logic is difficult to reason about
// the code is not modular
