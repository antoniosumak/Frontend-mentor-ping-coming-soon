var input = document.getElementById("input");
var format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var email = document.getElementById("email");
function provjeri() {
  if (input.value.match(format)) {
    console.log("Sve radi!");
    input.style.borderColor = "#c2d3ff";
    email.style.display = "none";
  } else {
    console.log("Ne valja format!");
    input.style.borderColor = "#ff5263";
    email.style.display = "block";
  }
}
