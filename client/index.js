import ShortUniqueId from "short-unique-id";
import "/index.scss";

const uid = new ShortUniqueId({ length: 13 });
const btnClear = document.querySelector(".clear");
const btnToggleWidget = document.querySelector("#btnToggleWidget");

btnClear.addEventListener("click", function () {
	localStorage.clear();
	location.reload();
});
