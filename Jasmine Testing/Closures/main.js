outerFn = () => {
  let data = "something from outerFn";
  let fact = "Remeber me!";
  return (innerFn = () => {
    // if you keep the dev tools open this will pause the code and place in the source tab where we can examine variables
    debugger;
    return fact;
  });
};

let outer = outerFn();
outer();
// Closure: exists when an inner function makes use of variables defined in an outer function that has returned
//  Closure is used to keep private variables private (unable to be modified from an externally)

counter = () => {
  let count = 0;
  return (inner = () => {
    count++;
    return console.log(count);
  });
};

let counter1 = counter();
console.log(counter1);
counter1(); // 1
counter1(); // 2
let counter2 = counter();
console.log(counter2);
counter2(); // 1
counter2(); // 2

counter1(); // 3 not affected by counter2

count; // undefined

// counter2 DOES NOT modify counter1 because they have their own private count variable
