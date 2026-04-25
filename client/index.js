import ShortUniqueId from "short-unique-id";
import "/index.scss";

const uid = new ShortUniqueId({ length: 13 });
const uidNumArr = Array.from({ length: 10 }, (_, i) => i + 1);

// const counterInput = document.querySelector("#counterInput");
const btnClear = document.querySelector(".clear");
const btnToggleWidget = document.querySelector("#btnToggleWidget");
// const formDefault = document.querySelector("#formDefault");

// let getRandomId = null;
// let counterDisplay = document.querySelector("#counterDisplay");
let totalCounter = 0;
let activity, clonedForm, randomId, form, formID;

const listBtnMovement = document.querySelectorAll(".movements-list__btn");

// document.addEventListener("DOMContentLoaded", function () {
// 	counterDisplay.textContent = totalCounter = localStorage.getItem(
// 		"totalCounter",
// 	)
// 		? Number(localStorage.getItem("totalCounter"))
// 		: 0;
// });

// function generateRandomId(length, str, num) {}

// function incrCounter(el) {
// 	totalCounter++;
// 	form = el.closest("form");
// 	formID = form.dataset.formId;

// 	console.log(form.dataset.formId);

// 	counterDisplay = form.querySelector(".form-counter__display");
// 	localStorage.setItem(`totalCounter-${formID}`, totalCounter);

// 	counterDisplay.textContent = totalCounter;

// 	console.log("el:", el);
// }

// function decrCounter(el) {
// 	if (totalCounter <= 0) return;

// 	totalCounter--;
// 	localStorage.setItem("totalCounter", totalCounter);
// 	counterDisplay.textContent = totalCounter;
// }

// function saveCounter(el) {
// 	if (!counterInput.value) return;

// 	totalCounter = Number(counterInput.value)
// 		? totalCounter + Number(counterInput.value)
// 		: totalCounter + Number(counterInput.value);
// 	counterDisplay.textContent = totalCounter;

// 	localStorage.setItem("totalCounter", totalCounter);
// 	counterInput.focus();
// 	counterInput.value = "";
// }

// btnClear.addEventListener("click", function () {
// 	localStorage.clear();
// 	location.reload();
// });

// // Pick an activity function
// listBtnMovement.forEach((btn) => {
// 	btn.addEventListener("click", function (e) {
// 		activity = this.dataset.activity;
// 		randomId = uid.rnd();
// 		getRandomId = randomId;

// 		clonedForm = formDefault.cloneNode(true);

// 		clonedForm.querySelector(".form-counter__display").textContent = "0";
// 		clonedForm.setAttribute("data-form-id", `${randomId}`);
// 		clonedForm.removeAttribute("id");

// 		document.querySelector(".main-section").appendChild(clonedForm);
// 		this.classList.toggle("is-active");
// 	});
// });

btnToggleWidget.addEventListener("click", function (e) {
	this.parentElement.classList.toggle("is-hidden");
	this.classList.toggle("is-active");
	this.querySelector(".movement-widget__control--icon").classList.toggle(
		"is-reverse",
	);
});

// // ----
// document.addEventListener("click", function (e) {
// 	let targetEl = e.target;

// 	if (targetEl.tagName !== "BUTTON") return;

// 	console.log(targetEl);

// 	if (targetEl.classList.contains("btn-plus")) incrCounter(targetEl);
// 	if (targetEl.classList.contains("btn-minus")) decrCounter(targetEl);
// 	if (targetEl.classList.contains("btn-save")) saveCounter(targetEl);
// });
