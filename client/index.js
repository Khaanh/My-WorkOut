import ShortUniqueId from "short-unique-id";
import "/index.scss";

const uid = new ShortUniqueId({ length: 13 });
const btnClear = document.querySelector(".clear");
const btnSave = document.querySelector("button[data-action=saveValue]");

let generatedId,
	savedId,
	dataExercise,
	formEl,
	targetEl,
	inputEl,
	firstInputEl,
	counterDisplay,
	savedCounter,
	previousCounter,
	defaultValue,
	value = 0;

btnClear.addEventListener("click", function () {
	localStorage.clear();
	location.reload();
});

document.addEventListener("DOMContentLoaded", (e) => {
	defaultValue = localStorage.getItem("pullups");
	counterDisplay = document.querySelector(".form-counter__display");
	counterDisplay.textContent = defaultValue;
	firstInputEl = document.querySelectorAll(".form-counter__input");
	firstInputEl[0].focus();
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

	if (targetEl.dataset.action === "increaseValue") increaseValue(dataExercise);
	if (targetEl.dataset.action === "decreaseValue") decreaseValue(dataExercise);
	if (targetEl.dataset.action === "saveValue") saveValue(dataExercise);
});

const increaseValue = function (exercise) {
	value = localStorage.getItem(exercise.toLowerCase(), value);
	value++;
	counterDisplay.textContent = value;
	localStorage.setItem(exercise.toLowerCase(), value);
};

const decreaseValue = function (exercise) {
	value = localStorage.getItem(exercise.toLowerCase());

	if (value <= 0) return;
	value--;
	counterDisplay.textContent = value;
	localStorage.setItem(exercise.toLowerCase(), value);
};

const saveValue = function (exercise) {
	value = Number(localStorage.getItem(exercise.toLowerCase()));
	value += Number(inputEl.value);

	counterDisplay.textContent = value;
	localStorage.setItem(exercise.toLowerCase(), value);
	inputEl.value = "";
	inputEl.focus();
};

// document.addEventListener("keypress", function (e) {
// 	e.preventDefault();
// 	console.log(e.key);

// 	if (e.key === "Enter") {
// 		saveValue();
// 	}
// });
