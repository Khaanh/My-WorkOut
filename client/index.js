import ShortUniqueId from "short-unique-id";
import "/index.scss";

const uid = new ShortUniqueId({ length: 13 });
const btnClear = document.querySelector(".clear");
let generatedId, savedId, form, target, savedCounter;
let counter = 0;

btnClear.addEventListener("click", function () {
	localStorage.clear();
	location.reload();
});

document.addEventListener("click", (e) => {
	form = e.target.closest("[data-action='formCount']");
	target = e.target.closest("[data-action]");

	console.log(target.dataset.action);

	if (target.dataset.action === "increaseCount") increaseCounter(counter);
	if (target.dataset.action === "decreaseCount") decreaseCounter(counter);
	if (target.dataset.action === "saveCount") saveCounter(counter);

	generatedId = uid.rnd();
	form.id || form.setAttribute("id", generatedId);
	localStorage.setItem("formID", form.id);
});

const increaseCounter = function (counter) {
	counter++;
	console.log(counter);
};

const decreaseCounter = function (counter) {
	counter--;
	console.log(counter);
};

const saveCounter = function (e) {};
