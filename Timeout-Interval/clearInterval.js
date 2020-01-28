let num = 0;

let intervalId = setInterval(() => {
  num++;
  console.log(`num: ${num}`);
  if (num === 3) {
    clearInterval(intervalId);
  }
}, 1000);
