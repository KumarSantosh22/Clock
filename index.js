setInterval(function () {
  let a;
  let date;
  let time;
  a = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  date = a.toLocaleDateString(undefined, options);
  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  document.getElementById("my-time").innerHTML =
    "<h1>" + time + "<br> on " + date + "</h1>";
}, 1000);
