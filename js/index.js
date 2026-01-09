const counterInput = document.querySelector("#counterInput");
const btnPlus = document.querySelector("#btnPlus");
const btnMinus = document.querySelector("#btnMinus");
const btnSave = document.querySelector("#btnSave");
let totalRep = document.querySelector("#totalRep");
let counter = 0;

btnPlus.addEventListener("click", () => {
	counter++;
	counterInput.value = counter;
});

btnSave.addEventListener("click", () => {
	totalRep.textContent = counter;
});
