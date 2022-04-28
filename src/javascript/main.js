import "../style.css";
import { domselector } from "./domselectors";

function clear() {
  domselector.container.innerHTML = "";
}
clear();

domselector.click.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});
