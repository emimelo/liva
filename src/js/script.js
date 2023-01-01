import cards from "./cards.js";
import { createCards } from "./mosaic.js";
import { toggleNav } from "./nav.js";
import { toggleFilter } from "./filter.js";
import { validators } from "./form.js";
import { validatorsDesk } from "./formDesktop.js";
import { handlePhone } from "./maskPhone.js";

createCards(cards);

$("#btn-mobile").on("click", toggleNav);

$("#btn-filter").on("click", toggleFilter);

$(".form")[0].addEventListener("submit", (e) => {
  e.preventDefault();

  if (validators()) {
    $("dialog").modal("show");
    hashSemHash(e);
    setTimeout(function () {
      e.target.submit();
    }, 2000);
  }
});

$(".form").on("submit", (e) => {
  e.preventDefault();
  if (validatorsDesk()) {
    $("dialog").modal("show");
    hashSemHash(e);
    setTimeout(function () {
      e.target.submit();
    }, 2000);
  }
});

$("#btn-close-modal").on("click", function () {
  $("dialog").modal("hide");
});

$("#telefoneDesk").on("input", (e) => handlePhone(e));
$("#telefone").on("input", (e) => handlePhone(e));

$("select").on("click", function () {
  $(this).toggleClass("close-select");
});

function hashSemHash(e) {
  history.pushState("", document.title, location.pathname);

  e.preventDefault();
}
