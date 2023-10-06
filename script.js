const root = document.querySelector(":root");
const form = document.querySelector("#form__values");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const rgbValues = document.querySelector(".rgb_values > h1");
const copyBtn = document.getElementById("copyBtn");
form.addEventListener("input", (e) => {
  e.preventDefault();
  const redColor = red.value;
  const greenColor = green.value;
  const blueColor = blue.value;
  rgbValues.textContent = `rgb(${redColor},${greenColor},${blueColor})`;
  root.style.setProperty(
    "--dynamic-background",
    `rgb(${redColor},${greenColor},${blueColor})`
  );
  copyBtn.addEventListener("click", (e) => {
    navigator.clipboard
      .writeText(`rgb(${redColor},${greenColor},${blueColor})`)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  });
});