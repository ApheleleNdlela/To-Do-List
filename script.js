const register = document.getElementById("register");
const password = document.getElementById("password");
const repassword = document.getElementById("retype");
const username = document.getElementById("username");

let users = [];

users = JSON.parse(localStorage.getItem("Users"))
  ? JSON.parse(localStorage.getItem("Users"))
  : [];

function Register() {
  let user = {
    username: username.value,
    password: password.value,
  };

  const check = users.some((object) => {
    return object.username == username.value;
  });

  if (check == false) {
    users.push(user);
    localStorage.setItem("Users", JSON.stringify(users));
  } else {
    password.value = "";
    repassword.value = "";
  }
}
