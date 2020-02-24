// https://api.coindesk.com/v1/bpi/currentprice.json
let btn = document.querySelector("#btn");
let price = document.querySelector("#price");

// listen for clicks
btn.addEventListener("click", () => {
  // make the request
  let XHR = new XMLHttpRequest();

  XHR.onreadystatechange = () => {
    if (XHR.readyState == 4 && XHR.status == 200) {
      let currentRate = JSON.parse(XHR.responseText).bpi.USD.rate_float;
      price = currentRate;
    }
  };

  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
});
