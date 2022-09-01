// =============== BURGER ===============
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

// =============== MODAL ===============
const buttonClose = document.querySelector(".modal__button-close");
const modal = document.querySelector(".modal");
const buttonHero = document.querySelector(".hero__button");

buttonHero.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("active");

  buttonClose.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("active");
  });
});
