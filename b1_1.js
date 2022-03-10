var user = document.querySelector(".in_email");
var pass = document.querySelector(".in_pass");
var btnLog = document.querySelector(".log_btn");

var x = {
  user: "nhathuu@11111.com",
  pass: "000000",
};

user.addEventListener("input", (e) => {
  user.setAttribute("value", e.target.value);
});
user.oninput = function (e) {
  user.setAttribute("value", e.target.value);
};

pass.addEventListener("input", (e) => {
  pass.setAttribute("value", e.target.value);
});
function check(user, pass) {
  if (user === x.user && pass === x.pass) {
    alert("Dang nhap thanh cong");
  } else {
    alert("Email hoac mat khau sai");
  }
}
btnLog.addEventListener("click", function () {
  check(user.value, pass.value);
});
