let btn = document.querySelector("button");
let section = document.querySelector("#comments");
btn.addEventListener("click", sendRequest);

function sendRequest() {
  axios
    .get("https://jsonplaceholder.typicode.com/comments", {
      params: {
        postId: 1
      }
    })
    .then(addComments)
    .catch(handleErrors);
}

addComments = res => {
  res.data.forEach(comment => {
    appendComment(comment);
  });
};

appendComment = comment => {
  let newP = document.createElement("p");
  newP.innerText = comment.email;
  section.appendChild(newP);
};

handleErrors = err => {
  if (err.response) {
    console.log("Problem With Response ", err.response.status);
  } else if (err.request) {
    console.log("Problem With Request!");
  } else {
    console.log("Error", err.message);
  }
};
