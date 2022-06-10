let bulb = document.getElementById("bulb");
let body1 = document.querySelector("body");
let textColorChange = document.getElementsByClassName("textColorChange");

console.log(textColorChange);

bulb.addEventListener("click", function () {
  body1.classList.toggle("bodyWhite");
  for (let i = 0; i < textColorChange.length; i++) {
    textColorChange[i].classList.toggle("color");
  }
});
