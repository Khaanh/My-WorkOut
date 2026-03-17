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
const activityTitle = document.querySelector("#activityTitle");
const formDefault = document.querySelector("#formDefault");
const formCounter = document.querySelector(".form-counter");

let getRandomId = null;
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

window.addEventListener("click", function (e) {
	const targetEl = e.target;
	console.log(targetEl);

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

btnClear.addEventListener("click", function () {
	localStorage.clear();
	location.reload();
});

// Pick an activity function
listBtnMovement.forEach((btn) => {
	btn.addEventListener("click", function (e) {
		activity = this.dataset.activity;
		randomId = uid.rnd();
		getRandomId = randomId;

		console.log(activity);
		console.log(getRandomId);

		//
		clonedForm = formDefault.cloneNode(true);

		clonedForm.querySelector("#activityTitle").textContent = activity + ": ";
		activity = this.dataset.activity.toLowerCase().replace(" ", "");

		clonedForm.setAttribute("data-form", `form-${activity}-${randomId}`);
		clonedForm.setAttribute("id", `form-${activity}-${randomId}`);

		clonedForm
			.querySelector("#counterDisplay")
			.setAttribute("id", `counterDisplay-${randomId}`);

		clonedForm
			.querySelector("#activityTitle")
			.setAttribute("id", `activityTitle-${randomId}`);

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

// ----
formCounter.addEventListener("click", function (e) {
	let targetEl = e.target;

	console.log(this);

	// console.log(e);
});
