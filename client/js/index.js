const uid = new ShortUniqueId({ length: 13 });
const uidNumArr = Array.from({ length: 10 }, (_, i) => i + 1);
const uidAlphabet = "abcdefghijklmnopqrstuvwxyz";

console.log(uidNumArr);
console.log(uidAlphabet.split(""));

const counterInput = document.querySelector("#counterInput");
const btnPlus = document.querySelector("#btnPlus");
const btnMinus = document.querySelector("#btnMinus");
const btnSave = document.querySelector("#btnSave");
const btnClear = document.querySelector(".clear");
const btnToggleWidget = document.querySelector("#btnToggleWidget");
const activityTitle = document.querySelector(".activity-title");
const formDefault = document.querySelector("#formDefault");

let counterDisplay = document.querySelector("#counterDisplay");
let counter = 0;
let totalCounter = 0;
let activity, clonedForm, randomId;

const listBtnMovement = document.querySelectorAll(".movements-list__btn");

document.addEventListener("DOMContentLoaded", function () {
	counterDisplay.textContent = totalCounter = localStorage.getItem(
		"totalCounter",
	)
		? Number(localStorage.getItem("totalCounter"))
		: 0;
});

function generateRandomId(length, str, num) {}

// const uid = Array.from()

// formDefault.addEventListener("input", function (e) {
// 	const { input, value } = e.target;
// 	console.log(e.target);

// 	console.log(input, value);
// });

formDefault.addEventListener("click", function (e) {
	const targetEl = e.target;

	// if (targetEl.tagName === "BUTTON" && targetEl.id === "btnPlus") {
	// 	btnPlusFunc();
	// }

	// if (targetEl.tagName === "BUTTON" && targetEl.id === "btnMinus") {
	// 	btnMinusFunc();
	// }

	// if (targetEl.tagName === "BUTTON" && targetEl.id === "btnSave") {
	// 	btnSaveFunc();
	// }

	if (targetEl.tagName !== "BUTTON") return;

	if (targetEl.id === "btnPlus") incrCounter();
	if (targetEl.id === "btnMinus") decrCounter();
	if (targetEl.id === "btnSave") saveCounter();
});

function incrCounter() {
	totalCounter++;
	localStorage.setItem("totalCounter", totalCounter);
	counterDisplay.textContent = totalCounter;
}

function decrCounter() {
	if (totalCounter <= 0) return;

	totalCounter--;
	localStorage.setItem("totalCounter", totalCounter);
	counterDisplay.textContent = totalCounter;
}

function saveCounter() {
	if (!counterInput.value) return;

	totalCounter = Number(counterInput.value)
		? totalCounter + Number(counterInput.value)
		: totalCounter + Number(counterInput.value);
	counterDisplay.textContent = totalCounter;

	localStorage.setItem("totalCounter", totalCounter);
	counterInput.focus();
	counterInput.value = "";
}

// btnPlus.addEventListener("click", function () {
// 	totalCounter++;
// 	localStorage.setItem("totalCounter", totalCounter);
// 	counterDisplay.textContent = totalCounter;
// });

// btnMinus.addEventListener("click", function () {
// 	if (totalCounter <= 0) return;

// 	totalCounter--;
// 	localStorage.setItem("totalCounter", totalCounter);
// 	counterDisplay.textContent = totalCounter;
// });

// btnSave.addEventListener("click", function () {
// 	if (!counterInput.value) return;

// 	totalCounter = Number(counterInput.value)
// 		? totalCounter + Number(counterInput.value)
// 		: totalCounter + Number(counterInput.value);
// 	counterDisplay.textContent = totalCounter;

// 	localStorage.setItem("totalCounter", totalCounter);
// 	counterInput.focus();
// 	counterInput.value = "";
// });

btnClear.addEventListener("click", function () {
	localStorage.clear();
	location.reload();
});

// Pick an activity function
listBtnMovement.forEach((btn) => {
	btn.addEventListener("click", function (e) {
		activity = this.dataset.activity;
		randomId = uid.rnd();

		console.log(activity);

		//
		clonedForm = formDefault.cloneNode(true);

		clonedForm.querySelector(".activity-title").textContent = activity + ": ";
		activity = this.dataset.activity.toLowerCase().replace(" ", "");

		clonedForm.setAttribute("data-form", `form-${activity}-${randomId}`);
		clonedForm.setAttribute("id", `form-${activity}-${randomId}`);

		// activityTitle.textContent = activity + ":";
		//
		document.querySelector(".main-section").appendChild(clonedForm);
		this.classList.toggle("is-active");
	});
});

btnToggleWidget.addEventListener("click", function (e) {
	this.parentElement.classList.toggle("is-hidden");
	this.classList.toggle("is-active");
	this.querySelector(".movement-widget__control--icon").classList.toggle(
		"is-reverse",
	);
});

// const formId = document.querySelector("#formId");
// const inp = document.querySelector("#inp");
// let count = 0;

// formId.addEventListener("click", function (e) {
// 	const el = e.target;
// 	console.log(e.target);
// 	console.log(e);
// 	console.log(el.id);

// 	if (el.id === "plus") {
// 		plusCount();
// 	}

// 	if (el.id === "minus") {
// 		minusCount();
// 	}

// 	e.preventDefault();
// });

// function plusCount() {
// 	count++;
// 	inp.value = count;
// }

// function minusCount() {
// 	count--;
// 	inp.value = count;
// }
