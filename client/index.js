import ShortUniqueId from "short-unique-id";
import "/index.scss";

const uid = new ShortUniqueId({ length: 13 });
const btnClear = document.querySelector(".clear");
let generatedId,
	savedId,
	formEl,
	targetEl,
	inputEl,
	counterDisplay,
	savedCounter;
let counter = 0;

btnClear.addEventListener("click", function () {
	localStorage.clear();
	location.reload();
});

document.addEventListener("DOMContentLoaded", (e) => {
	let previousCounter = Number(localStorage.getItem(localStorage.key(0)));
	let counterDisplay = document.querySelector(".form-counter__display");
	counterDisplay.textContent = previousCounter;
});

document.addEventListener("click", (e) => {
	formEl = e.target.closest("[data-action='formCount']");
	targetEl = e.target.closest("[data-action]");
	inputEl = formEl.querySelector("[data-action='inputCount']");
	counterDisplay = formEl.querySelector(".form-counter__display");

	console.log(inputEl);

	if (!formEl || !targetEl) return;

	generatedId = uid.rnd();
	formEl.id || formEl.setAttribute("id", generatedId);

	if (targetEl.dataset.action === "increaseCount") {
		increaseCounter();
	}

	if (targetEl.dataset.action === "decreaseCount") {
		decreaseCounter();
	}

	if (targetEl.dataset.action === "saveCount") {
		saveCounter();
	}
});

const increaseCounter = function () {
	counter++;
	counterDisplay.textContent = counter;
	console.log(counter);
	localStorage.setItem(formEl.id, counter);
};

const decreaseCounter = function () {
	if (counter <= 0) return;
	counter--;
	counterDisplay.textContent = counter;
	console.log(counter);
	localStorage.setItem(formEl.id, counter);
};

const saveCounter = function (e) {
	let inputVal = Number(inputEl.value);
	counter = counter + inputVal;
	counterDisplay.textContent = counter;
	localStorage.setItem(formEl.id, counter);
	inputEl.value = "";
};
