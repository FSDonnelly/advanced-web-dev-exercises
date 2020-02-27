let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
  let url = "https://api.github.com/users/FSDonnelly";
  fetch(url)
    .then(handleErrors)
    .then(request => {
      console.log("EVERYTHING IS FINE!");
      console.log(request);
    })
    .catch(error => {
      console.log(`There was a problem... error: ${error}`);
    });
});

btn1.addEventListener("click", () => {
  let url = "https://api.github.com/users/FSDonnellyhsh";
  fetch(url)
    .then(handleErrors)
    .then(request => {
      console.log("EVERYTHING IS FINE!");
      console.log(request);
    })
    .catch(error => {
      console.log(`There was a problem... error: ${error}`);
    });
});

handleErrors = request => {
  if (!request.ok) {
    throw Error(request.status);
  }
  return request;
};
