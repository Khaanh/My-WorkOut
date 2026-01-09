const counterInput = document.querySelector("#counterInput");
const btnPlus = document.querySelector("#btnPlus");
const btnMinus = document.querySelector("#btnMinus");
const btnSave = document.querySelector("#btnSave");
let counterDisplay = document.querySelector("#counterDisplay");
let counter = 0;
let totalCounter = 0;

btnPlus.addEventListener("click", () => {
	counter++;
	counterInput.value = counter;

	console.info(totalCounter, typeof totalCounter);
});

btnSave.addEventListener("click", () => {
	totalCounter = counter ? counter : counterInput.value;
	counterDisplay.textContent = totalCounter;

	counter = 0;
	counterInput.value = "";
});
