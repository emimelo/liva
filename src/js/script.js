import cards from "./cards.js";
import { createCards } from "./mosaic.js";
import { toggleNav } from "./nav.js";
import { toggleFilter } from "./filter.js";
import { validators } from "./form.js";
import { validatorsDesk } from "./formDesktop.js";

createCards(cards);

const btnNav = document.getElementById("btn-mobile");
btnNav.addEventListener("click", toggleNav);

const btnFilter = document.getElementById("btn-filter");
btnFilter.addEventListener("click", toggleFilter);

const forms = document.querySelectorAll(".form");

forms[0].addEventListener("submit", (e) => {
  e.preventDefault();
  validators();
});

forms[1].addEventListener("submit", (e) => {
  e.preventDefault();
  validatorsDesk();
});
