let elem = document.querySelector("#root");
let myForm = document.createElement("form");
let myBtn = document.createElement("button");
let myTitle = document.querySelector("h1");
let countrySelect = document.createElement("select");
myBtn.type = "button";
let inputArr = [];
for (let i = 0; i < 3; i++) {
  let myLabel = document.createElement("label");
  let myInput = document.createElement("input");

  myForm.appendChild(myLabel);
  myForm.appendChild(myInput);
  myInput.type = "number";
  myInput.placeholder = "Give value to ";
  myInput.classList = "my-input ";
  if (i === 0) {
    myLabel.textContent = "R";
    myLabel.setAttribute("for", "r");
    myInput.id = "r";
    myInput.placeholder += "Red";
  } else if (i === 1) {
    myLabel.textContent = "G";
    myLabel.setAttribute("for", "g");
    myInput.id = "g";
    myInput.placeholder += "Green";
  } else {
    myLabel.textContent = "B";
    myLabel.setAttribute("for", "b");
    myInput.id = "b";
    myInput.placeholder += "Blue";
  }
  inputArr.push(myInput);
  inputArr[i].addEventListener("keydown" && "keyup", () => {
    let max_chars = 3;
    if (inputArr[i].value.length > max_chars) {
      inputArr[i].value = inputArr[i].value.substring(0, max_chars);
    }
  });
  inputArr[i].addEventListener("change", () => {
    if (inputArr[i].value >= 256 || inputArr[i].value <= 0) {
      alert("Not an RGB value, Please try a number from 0-256");
      inputArr[i].value = "";
    }
  });
}
elem.appendChild(myForm);
myForm.method = "get";
myForm.appendChild(countrySelect);
myForm.appendChild(myBtn);
myBtn.textContent = "click me";
export { inputArr };
export let colorValue = document.createElement("div");
elem.appendChild(colorValue);
import { changeColor, RGB, countries } from "./helpers.js";
for (let i = 0; i < countries.length; i++) {
  countrySelect.innerHTML += `<option Value ${countries[i].toLowerCase}>${countries[i]}</option>`;
}
myTitle.innerHTML += `<span></span>`;
let country = document.querySelector("span");
myBtn.addEventListener("click", RGB);
myBtn.addEventListener("click", () => {
  myTitle.style.backgroundColor = changeColor();
  myTitle.style.color = changeColor();
});
countrySelect.addEventListener("change", () => {
  country.textContent = countrySelect.options[countrySelect.selectedIndex].text;
});
