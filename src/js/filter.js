import cards from "./cards.js";
import { createCards } from "./mosaic.js";

export function toggleFilter() {
  const container = document.querySelector(".container-filter");
  const btn = document.querySelector("#btn-filter");
  const img = document.querySelector("#svg-filter");

  container.classList.toggle("active");
  btn.classList.toggle("active");
  img.classList.toggle("active");

  img.className === "active"
    ? (img.src = "src/assets/icons/btn_close.svg")
    : (img.src = "src/assets/icons/filter.svg");
}

function filterLocation(location) {
  if (location === "Localização") {
    createCards(cards);
  } else {
    const newFilter = cards.filter((card) => card.neighborhood === location);
    createCards(newFilter);
  }
}

const localization = document.getElementById("localizacao");
localization.addEventListener("change", (e) => filterLocation(e.target.value));

function filterImmobile(immobile) {
  if (immobile === "Tipo de imóvel") {
    createCards(cards);
  } else {
    const newFilter = cards.filter((card) => card.type === immobile);
    createCards(newFilter);
  }
}

const immobile = document.getElementById("imovel");
immobile.addEventListener("change", (e) => filterImmobile(e.target.value));

function filterStage(stage) {
  if (stage === "Estágio do empreendimento") {
    createCards(cards);
  } else {
    const newFilter = cards.filter((card) => card.stage === stage);
    createCards(newFilter);
  }
}

const stage = document.getElementById("empreendimento");
stage.addEventListener("change", (e) => filterStage(e.target.value));
