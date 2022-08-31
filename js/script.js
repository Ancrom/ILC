// =============== BURGER ===============
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});