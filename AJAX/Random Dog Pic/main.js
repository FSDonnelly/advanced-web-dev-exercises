let btn = document.querySelector("#btn");

// listen for clicks
btn.addEventListener("click", () => {
  // make the request
  let XHR = new XMLHttpRequest();

  XHR.onreadystatechange = () => {
    if (XHR.readyState == 4 && XHR.status == 200) {
      let data = JSON.parse(XHR.responseText);
      console.log(data);
    }
  };

  XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
  XHR.send();
});
