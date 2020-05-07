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
