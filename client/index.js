import ShortUniqueId from "short-unique-id";
import "/index.scss";

const uid = new ShortUniqueId({ length: 13 });
const btnClear = document.querySelector(".clear");
let generatedId,
	savedId,
	dataExercise,
	formEl,
	targetEl,
	inputEl,
	counterDisplay,
	savedCounter,
	previousCounter,
	value = 0;

btnClear.addEventListener("click", function () {
	localStorage.clear();
	location.reload();
});

document.addEventListener("DOMContentLoaded", (e) => {
	counterDisplay = document.querySelector(".form-counter__display");
	let firstInput = document.querySelectorAll(".form-counter__input");
	firstInput[0].focus();
});

document.addEventListener("click", (e) => {
	formEl = e.target.closest("[data-action='formCount']");
	targetEl = e.target.closest("[data-action]");
	inputEl = formEl.querySelector("[data-action='inputCount']");
	counterDisplay = formEl.querySelector(".form-counter__display");
	dataExercise = formEl.getAttribute("data-exercise");

	console.log(dataExercise.toLowerCase());

	if (!formEl || !targetEl) return;

	generatedId = uid.rnd();
	formEl.id || formEl.setAttribute("id", `${dataExercise}`);

	if (targetEl.dataset.action === "increaseCount") {
		increaseCounter(dataExercise);
	}

	if (targetEl.dataset.action === "decreaseCount") {
		decreaseCounter(dataExercise);
	}

	if (targetEl.dataset.action === "saveCount") {
		saveCounter(e);
	}
});

const increaseCounter = function (dataExercise) {
	value = localStorage.getItem(dataExercise.toLowerCase(), value);
	value++;
	counterDisplay.textContent = value;
	localStorage.setItem(dataExercise.toLowerCase(), value);
};

const decreaseCounter = function (dataExercise) {
	value = localStorage.getItem(`${dataExercise.toLowerCase()}`);

	if (value <= 0) return;
	value--;
	counterDisplay.textContent = value;
	localStorage.setItem(`${dataExercise.toLowerCase()}`, value);
};

// const saveCounter = function (e) {
// 	let inputVal = Number(inputEl.value);
// 	counter = counter + inputVal;
// 	counterDisplay.textContent = counter;
// 	localStorage.setItem(formEl.id, counter);
// 	inputEl.value = "";
// };
