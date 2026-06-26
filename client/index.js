import ShortUniqueId from "short-unique-id";
import "/index.scss";

const uid = new ShortUniqueId({ length: 13 });
const btnClear = document.querySelector(".clear");
let generatedId,
	savedId,
	formData,
	formEl,
	targetEl,
	inputEl,
	counterDisplay,
	savedCounter,
	previousCounter,
	counter = 0;

btnClear.addEventListener("click", function () {
	localStorage.clear();
	location.reload();
});

document.addEventListener("DOMContentLoaded", (e) => {
	previousCounter = Number(localStorage.getItem("pullups"));
	counterDisplay = document.querySelector(".form-counter__display");
	let firstInput = document.querySelectorAll(".form-counter__input");
	firstInput[0].focus();
	counterDisplay.textContent = previousCounter;
	console.log(previousCounter);
});

document.addEventListener("click", (e) => {
	formEl = e.target.closest("[data-action='formCount']");
	targetEl = e.target.closest("[data-action]");
	inputEl = formEl.querySelector("[data-action='inputCount']");
	counterDisplay = formEl.querySelector(".form-counter__display");
	formData = formEl.getAttribute("data-default");
	console.log(formData);

	// console.log(inputEl);

	if (!formEl || !targetEl) return;

	generatedId = uid.rnd();
	formEl.id || formEl.setAttribute("id", `${formData}`);

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

	if (previousCounter > 0) {
		counterDisplay.textContent = previousCounter + counter;
		localStorage.setItem(formEl.id, counter);
	} else {
		counterDisplay.textContent = counter;
		localStorage.setItem(formEl.id, counter);
	}

	console.log(counter);
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
