/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");
let weightEl = document.getElementById("weight-el");
let volumeEl = document.getElementById("volume-el");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;
  lengthEl.textContent = `${baseValue} meters = ${Number(
    baseValue * meterToFeet
  ).toFixed(3)} feet | ${baseValue} feet = ${Number(
    baseValue / meterToFeet
  ).toFixed(3)} meters`;
  volumeEl.textContent = `${baseValue} liters = ${Number(
    baseValue * literToGallon
  ).toFixed(3)} gallons | ${baseValue} gallons = ${Number(
    baseValue / literToGallon
  ).toFixed(3)} liters`;
  weightEl.textContent = `${baseValue} kilograms = ${Number(
    baseValue * kiloToPound
  ).toFixed(3)} pounds | ${baseValue} pounds = ${Number(
    baseValue / kiloToPound
  ).toFixed(3)} kilograms`;
  if (!baseValue) {
    lengthEl.textContent = "0 meters = 0.000 feet | 0 feet = 0.000 meters";
    volumeEl.textContent =
      "0 liters = 0.000 gallons | 0 gallons = 0.000 liters";
    weightEl.textContent =
      "0 kilograms = 0.000 pounds | 0 pounds = 0.000 kilograms";
    return;
  }
});
