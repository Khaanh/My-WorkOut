const uid = new ShortUniqueId({ length: 13 });

const counterInput = document.querySelector("#counterInput");
const btnPlus = document.querySelector("#btnPlus");
const btnMinus = document.querySelector("#btnMinus");
const btnSave = document.querySelector("#btnSave");
const btnClear = document.querySelector(".clear");
const btnToggleWidget = document.querySelector("#btnToggleWidget");
const activityTitle = document.querySelector(".activity-title");
const formActivity = document.querySelector("#form-activity");

let counterDisplay = document.querySelector("#counterDisplay");
let counter = 0;
let totalCounter = 0;
let activity, clonedForm, randomId;

const listBtnMovement = document.querySelectorAll(".movements-list__btn");

document.addEventListener("DOMContentLoaded", () => {
	counterDisplay.textContent = totalCounter = localStorage.getItem(
		"totalCounter",
	)
		? localStorage.getItem("totalCounter")
		: 0;
});

btnPlus.addEventListener("click", () => {
	totalCounter++;
	localStorage.setItem("totalCounter", totalCounter);
	counterDisplay.textContent = totalCounter;
});

btnMinus.addEventListener("click", () => {
	if (totalCounter <= 0) return;

	totalCounter--;
	localStorage.setItem("totalCounter", totalCounter);
	counterDisplay.textContent = totalCounter;
});

btnSave.addEventListener("click", () => {
	if (!counterInput.value) return;

	totalCounter = Number(counterInput.value)
		? totalCounter + Number(counterInput.value)
		: totalCounter + Number(counterInput.value);
	counterDisplay.textContent = totalCounter;

	localStorage.setItem("totalCounter", totalCounter);
	counterInput.focus();
	counterInput.value = "";
});

btnClear.addEventListener("click", () => {
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
		clonedForm = formActivity.cloneNode(true);

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
