const counterInput = document.querySelector("#counterInput");
const btnPlus = document.querySelector("#btnPlus");
const btnMinus = document.querySelector("#btnMinus");
const btnSave = document.querySelector("#btnSave");
const btnClear = document.querySelector(".clear");
const activityTitle = document.querySelector(".activity-title");
const formActivity = document.querySelector("#form-activity");

let counterDisplay = document.querySelector("#counterDisplay");
let counter = 0;
let totalCounter = 0;
let activity, clonedForm;

const arrBtnMovement = document.querySelectorAll(".movement-widget__btn");

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
arrBtnMovement.forEach((btn) => {
	btn.addEventListener("click", function (e) {
		activity = this.dataset.activity;

		console.log(activity);

		//
		clonedForm = formActivity.cloneNode(true);

		clonedForm.querySelector(".activity-title").textContent = activity + ": ";
		activity = this.dataset.activity.toLowerCase().replace(" ", "");

		clonedForm.setAttribute("data-form", `form-${activity}`);
		clonedForm.setAttribute("id", `form-${activity}`);

		// activityTitle.textContent = activity + ":";
		//
		document.querySelector(".main-section").appendChild(clonedForm);
		this.classList.toggle("is-active");
	});
});
