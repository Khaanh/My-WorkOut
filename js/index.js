const counterInput = document.querySelector("#counterInput");
const btnPlus = document.querySelector("#btnPlus");
const btnMinus = document.querySelector("#btnMinus");
const btnSave = document.querySelector("#btnSave");
let counterDisplay = document.querySelector("#counterDisplay");
let counter = 0;
let totalCounter = 0;

counterInput.focus();

btnPlus.addEventListener("click", () => {
	totalCounter++;
	counterDisplay.textContent = totalCounter;
});

btnMinus.addEventListener("click", () => {
	if (!totalCounter) return;

	totalCounter--;
	counterDisplay.textContent = totalCounter;
});

btnSave.addEventListener("click", () => {
	totalCounter = counterInput.value
		? totalCounter + Number(counterInput.value)
		: totalCounter + Number(counterInput.value);
	counterDisplay.textContent = totalCounter;

	counterInput.value = "";
});
