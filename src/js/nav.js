const nav = document.querySelector(".nav-menu");
const btn = document.querySelector("#btn-mobile");

export function toggleNav() {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
}

const list = document.querySelectorAll(".nav-item");
list.forEach((li) =>
  li.addEventListener("click", () => {
    nav.classList.remove("active");
    btn.classList.remove("active");
  })
);
