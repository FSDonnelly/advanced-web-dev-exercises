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
