import cards from "./cards.js";
import { createCards } from "./mosaic.js";

export function toggleFilter() {
  $(".container-filter").toggleClass("active");
  $(this).toggleClass("active");
  $("#svg-filter").toggleClass("active");

  $("#svg-filter").hasClass("active")
    ? $("#svg-filter").attr("src", "src/assets/icons/btn_close.svg")
    : $("#svg-filter").attr("src", "src/assets/icons/filter.svg");
}

function filterLocation(location) {
  if (location === "Localização") {
    createCards(cards);
  } else {
    const newFilter = cards.filter((card) => card.neighborhood === location);
    createCards(newFilter);
  }
}

$("#localizacao").on("change", (e) => filterLocation(e.target.value));

function filterImmobile(immobile) {
  if (immobile === "Tipo de imóvel") {
    createCards(cards);
  } else {
    const newFilter = cards.filter((card) => card.type === immobile);
    createCards(newFilter);
  }
}

$("#imovel").on("change", (e) => filterImmobile(e.target.value));

function filterStage(stage) {
  if (stage === "Estágio do empreendimento") {
    createCards(cards);
  } else {
    const newFilter = cards.filter((card) => card.stage === stage);
    createCards(newFilter);
  }
}

$("#empreendimento").on("change", (e) => filterStage(e.target.value));
