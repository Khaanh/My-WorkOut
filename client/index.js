import ShortUniqueId from "short-unique-id";
import "/index.scss";

const uid = new ShortUniqueId({ length: 13 });
const btnClear = document.querySelector(".clear");
const btnSave = document.querySelector("button[data-action=saveValue]");
const btnToggleSidebar = document.querySelector("#btnToggleSidebar");
const defaultExercise = document
	.querySelector("form[data-default=pullUp]")
	.getAttribute("data-default")
	.toLocaleLowerCase();

const listOfBtns = document.querySelectorAll(".movements-list__btn");

console.log(defaultExercise);

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
	defaultValue = localStorage.getItem(defaultExercise) || 0;
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

	// if (!formEl || !targetEl) return;

	// generatedId = uid.rnd();
	// formEl.id || formEl.setAttribute("id", `${dataExercise}`);

	if (targetEl.dataset.action === "increaseValue") increaseValue(dataExercise);
	if (targetEl.dataset.action === "decreaseValue") decreaseValue(dataExercise);
	if (targetEl.dataset.action === "saveValue") saveValue(dataExercise);
});

// const increaseValue = function (exercise) {
// 	value = localStorage.getItem(exercise.toLowerCase(), value);
// 	value++;
// 	counterDisplay.textContent = value;
// 	localStorage.setItem(exercise.toLowerCase(), value);
// };

// const decreaseValue = function (exercise) {
// 	value = localStorage.getItem(exercise.toLowerCase());

// 	if (value <= 0) return;
// 	value--;
// 	counterDisplay.textContent = value;
// 	localStorage.setItem(exercise.toLowerCase(), value);
// };

// const saveValue = function (exercise) {
// 	value = Number(localStorage.getItem(exercise.toLowerCase()));
// 	value += Number(inputEl.value);

// 	counterDisplay.textContent = value;
// 	localStorage.setItem(exercise.toLowerCase(), value);
// 	inputEl.value = "";
// 	inputEl.focus();
// };

function increaseValue(exercise) {
	value = localStorage.getItem(exercise.toLowerCase(), value);
	value++;
	counterDisplay.textContent = value;
	localStorage.setItem(exercise.toLowerCase(), value);
}

function decreaseValue(exercise) {
	value = localStorage.getItem(exercise.toLowerCase());

	if (value <= 0) return;
	value--;
	counterDisplay.textContent = value;
	localStorage.setItem(exercise.toLowerCase(), value);
}

function saveValue(exercise) {
	value = Number(localStorage.getItem(exercise.toLowerCase()));
	value += Number(inputEl.value);

	counterDisplay.textContent = value;
	localStorage.setItem(exercise.toLowerCase(), value);
	inputEl.value = "";
	inputEl.focus();
}

btnToggleSidebar.addEventListener("click", function () {
	document.querySelector(".movement-widget").classList.toggle("is-active");
});

listOfBtns.forEach((item) => {
	item.addEventListener("click", function (e) {
		const formNode = document.querySelector("form");
		const formClone = formNode.cloneNode(true);
		formClone.querySelector(".form-counter__display").textContent = 0;
		formClone.removeAttribute("data-default");
		formClone.setAttribute("data-exercise", item.getAttribute("data-activity"));

		document.querySelector(".main-section").appendChild(formClone);
	});
});
