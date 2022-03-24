import "../style.css";
import { discount, qwerty } from "./array";
import { domselector } from "./domselectors";

function clear() {
    domselector.container.innerHTML = "";
}
//make all cards
function create() {
    qwerty.forEach((element) => {
        function addcard() {
            domselector.container.insertAdjacentHTML(
                "beforeend",
                `<div class = "item">
          <div class = "text">
            <h2>${element.name}</h2>
            <h3>price: ${element.price}</h3>
            <div class = "item-button">
            <button>buy now</button>
            </div>
          </div>
        </div>`
            );
        }
        addcard();
    });
}
create();

//all qwerty button filter
domselector.all_qwerty.addEventListener("click", function (e) {
    clear();
    function specific() {
        qwerty.forEach((element) => {
            function addcard() {
                domselector.container.insertAdjacentHTML(
                    "beforeend",
                    `<div class = "item">
            <div class = "text">
              <h2>${element.name}</h2>
              <h3>price: ${element.price}</h3>
              <div class = "item-button">
              <button>buy now</button>
              </div>
            </div>
          </div>`
                );
            }
            addcard();
        });
    }
    specific();
});

//student discount button filter

domselector.discount.addEventListener("click", function (e) {
    clear();
    function specific() {
        discount.forEach((element) => {
            function addcard() {
                domselector.container.insertAdjacentHTML(
                    "beforeend",
                    `<div class = "item">
            <div class = "text">
            <h2>${element.name}</h2>
            <h3>price: ${element.price}</h3>
              <div class = "item-button">
              <button>buy now</button>
              </div>
            </div>
          </div>`
                );
            }
            addcard();
        });
    }
    specific();
});

//theme filter
domselector.click.addEventListener("click", function () {
    if (document.body.classList.contains("dark")) {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    } else {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    }
});
