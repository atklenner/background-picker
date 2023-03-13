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

document.getElementById("picker").addEventListener("change", (e) => {
  const color = e.target.value;
  body.style.backgroundColor = color;

  const red = parseInt(color.slice(1, 3), 16);
  const green = parseInt(color.slice(3, 5), 16);
  const blue = parseInt(color.slice(5, 7), 16);

  const value = red * 0.299 + green * 0.587 + blue * 0.114;

  if (value < 186) {
    body.style.color = "white";
  } else {
    body.style.color = "black";
  }
});
