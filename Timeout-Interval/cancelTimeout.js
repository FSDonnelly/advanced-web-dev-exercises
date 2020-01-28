let timerId = setTimeout(() => {
  console.log("This function runs in 30 seconds");
}, 30000);

setTimeout(() => {
  console.log("Canceling the first setTimeout", timerId);
  clearTimeout(timerId);
}, 2000);
