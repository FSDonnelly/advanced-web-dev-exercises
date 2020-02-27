let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function() {
  let url = "https://api.github.com/users/FSDonnelly";
  fetch(url)
    .then(handleErrors)
    .then(function(request) {
      console.log("EVERYTHING IS FINE!");
      console.log(request);
    })
    .catch(function(error) {
      console.log(`There was a problem... error: ${error}`);
    });
});

btn1.addEventListener("click", function() {
  let url = "https://api.github.com/users/FSDonnellyhsh";
  fetch(url)
    .then(handleErrors)
    .then(function(request) {
      console.log("EVERYTHING IS FINE!");
      console.log(request);
    })
    .catch(function(error) {
      console.log(`There was a problem... error: ${error}`);
    });
});

function handleErrors(request) {
  if (!request.ok) {
    throw Error(request.status);
  }
  return request;
}
