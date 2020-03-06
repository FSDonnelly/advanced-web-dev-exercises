$("#getBtn").click(() => {
  $.get("https://api.github.com/users/FSDonnelly")
    .done(data => {
      console.log(data);
    })
    .fail(() => {
      console.log("ERROR!");
    });
});

$("#postBtn").click(() => {
  let data = { name: "Charlie", city: "Florence" };
  $.post("www.catsarecoolandsoaredogs.com", data)
    .done(data => {
      console.log("HI!");
    })
    .fail(() => {
      console.log("ERROR!");
    });
});

$("#getJSONBtn").click(() => {
  $.getJSON("https://api.github.com/users/FSDonnelly")
    .done(data => {
      console.log(data);
    })
    .fail(() => {
      console.log("PROBLEM!");
    });
});
