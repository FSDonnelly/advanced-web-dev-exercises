let url = "https://randomuser.me/api/";
let fullnameDisp = document.querySelector("#fullname");
let avatar = document.querySelector("#avatar");
let username = document.querySelector("#username");
let city = document.querySelector("#city");
let email = document.querySelector("#email");

let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(displayErrors);
});

handleErrors = res => {
  if (!res.ok) {
    throw Error(res.status);
  }
  return res;
};

parseJSON = res => {
  return res.json().then(parsedData => {
    return parsedData.results[0];
  });
};

updateProfile = data => {
  let fullname = data.name.first + " " + data.name.last;
  fullnameDisp.innerText = fullname;
  avatar.src = data.picture.medium;
  username.innerText = data.login.username;
  city.innerText = data.location.city;
  email.innerText = data.email;
};

displayErrors = err => {
  console.log("INSIDE displayErrors!");
  console.log(err);
};
