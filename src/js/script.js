function toggleNav() {
  const nav = document.querySelector(".nav-menu");
  const sections = document.querySelectorAll("section");
  const footer = document.querySelector("#footer");
  const img = document.querySelector("#svg-menu");

  nav.classList.toggle("active");
  img.classList.toggle("open");
  footer.classList.toggle("desactive");
  sections.forEach((section) => section.classList.toggle("desactive"));

  img.className === "open"
    ? (img.src = "src/assets/btn_close.svg")
    : (img.src = "src/assets/btn_open.svg");
}

// const list = document.querySelectorAll(".nav-item");
// list.forEach((li) => console.log(li.addEventListener("click", toggleNav)));
