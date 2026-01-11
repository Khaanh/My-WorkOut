const counterInput = document.querySelector("#counterInput");
const btnPlus = document.querySelector("#btnPlus");
const btnMinus = document.querySelector("#btnMinus");
const btnSave = document.querySelector("#btnSave");
const btnClear = document.querySelector(".clear");

let counterDisplay = document.querySelector("#counterDisplay");
let counter = 0;
let totalCounter = 0;

document.addEventListener("DOMContentLoaded", () => {
	counterDisplay.textContent = totalCounter = localStorage.getItem(
		"totalCounter"
	)
		? localStorage.getItem("totalCounter")
		: 0;
});

btnPlus.addEventListener("click", () => {
	totalCounter++;
	localStorage.setItem("totalCounter", Number(totalCounter));
	counterDisplay.textContent = totalCounter;

	console.log(typeof localStorage.getItem("totalCounter"));
});

btnMinus.addEventListener("click", () => {
	if (!totalCounter) return;

	totalCounter--;
	localStorage.setItem("totalCounter", Number(totalCounter));
	counterDisplay.textContent = totalCounter;
});

btnSave.addEventListener("click", () => {
	if (!counterInput.value) return;

	totalCounter = counterInput.value
		? totalCounter + Number(counterInput.value)
		: totalCounter + Number(counterInput.value);
	counterDisplay.textContent = totalCounter;

	localStorage.setItem("totalCounter", Number(totalCounter));
	counterInput.focus();
	counterInput.value = "";
});

btnClear.addEventListener("click", () => {
	localStorage.clear();
});
