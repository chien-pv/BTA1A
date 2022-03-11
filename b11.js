var username = document.getElementById("username");
var password = document.getElementById("password");
var btnLog = document.querySelector(".log_btn");


btnLog.addEventListener("click", function () {
  var user = username.value;
  var pass = password.value;
  if (user === "nhathuu" && pass === "0000") {
    alert("Login Successfully");
  } else {
    alert("Login Failed");
  }
})