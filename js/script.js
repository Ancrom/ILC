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

// =============== TARIFF-BUTTON ===============
const buttonTariff = document.querySelectorAll(".tariff__button");

for (let i = 0; i < buttonTariff.length; i++) {
  buttonTariff[i].addEventListener("click", () => {
    for (let n = 0; n < buttonTariff.length; n++) {
      buttonTariff[n].classList.toggle("active");
    }
  });
}
