const body = document.querySelector("body");

document.getElementById("purple").addEventListener("click", () => {
  body.style.backgroundColor = "rgb(241, 63, 247)";
  body.style.color = "white";
});

document.getElementById("green").addEventListener("click", () => {
  body.style.backgroundColor = "rgb(0, 253, 81)";
  body.style.color = "white";
});

document.getElementById("blue").addEventListener("click", () => {
  body.style.backgroundColor = "rgb(0, 254, 255)";
  body.style.color = "white";
});
