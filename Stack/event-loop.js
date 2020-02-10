setTimeout(function() {
  console.log("Hello from the tmeout");
}, 0);

for (let i = 0; i < 1000000000; i++) {
  let x = i * 2;
}

console.log("Done with loop");
