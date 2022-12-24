function toggleNav() {
  const nav = document.querySelector(".nav-menu");
  const img = document.querySelector("#svg-menu");

  nav.classList.toggle("active");
  img.classList.toggle("open");

  img.className === "open"
    ? (img.src = "src/assets/btn_close.svg")
    : (img.src = "src/assets/btn_open.svg");
}
