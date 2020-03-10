$("#btn").click(() => {
  $.getJSON("http://aws.random.cat/meow")
    .done(data => {
      $("#catImg").attr("src", data.file);
    })
    .fail(() => {
      alert("REQUEST IS NOT PAWSIBBLE");
    });
});
