import ShortUniqueId from "short-unique-id";
import "/index.scss";

const uid = new ShortUniqueId({ length: 13 });
const btnClear = document.querySelector(".clear");
let generatedId, savedId, form, target, counterDisplay, savedCounter;
let counter = 0;

btnClear.addEventListener("click", function () {
	localStorage.clear();
	location.reload();
});

document.addEventListener("click", (e) => {
	form = e.target.closest("[data-action='formCount']");
	target = e.target.closest("[data-action]");
	counterDisplay = form.querySelector(".form-counter__display");

	console.log(counterDisplay);

	if (!form || !target) return;

	// if (target.dataset.action === "increaseCount") {
	// 	form
	// 		.querySelector('button[data-action="increaseCount"]')
	// 		.addEventListener("click", increaseCounter);
	// }
	// if (target.dataset.action === "decreaseCount") {
	// 	form
	// 		.querySelector('button[data-action="decreaseCount"]')
	// 		.addEventListener("click", decreaseCounter);
	// }

	if (target.dataset.action === "increaseCount") {
		increaseCounter();
	}

	if (target.dataset.action === "decreaseCount") {
		decreaseCounter();
	}

	generatedId = uid.rnd();
	form.id || form.setAttribute("id", generatedId);
	localStorage.setItem("formID", form.id);
});

const increaseCounter = function () {
	counter++;
	counterDisplay.textContent = counter;
	console.log(counter);
};

const decreaseCounter = function () {
	if (counter <= 0) return;
	counter--;
	counterDisplay.textContent = counter;
	console.log(counter);
};

const saveCounter = function (e) {};
