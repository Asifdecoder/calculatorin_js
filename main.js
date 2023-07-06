let screen = document.getElementById("screen");
let ans = document.querySelector(".btn-green");
let clear = document.querySelector(".btn-red");
let buttons = document.querySelectorAll(".btn");

// To calculate after cllicking on = sign
ans.addEventListener("click", () => {
  if (screen.value != "") {
    let result = eval(screen.value);

    screen.value = result;
  } else {
    screen.value = "No-Input";
  }
});

// To clear the screen after clicking on the c button
clear.addEventListener("click", function (e) {
  screen.value = "";
 


});
// to acces any button clicked in the numpad

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let num = event.target.dataset.num;
    screen.value = screen.value + num;
  });
});


