const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((item) => item.addEventListener("click", linkAction));

// Swiper

let homeSwiper = new Swiper(".home-swiper", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//Scroll reveal

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 10,
  reset: true,
});

sr.reveal(`.home-swiper,.new-swiper,.newsletter__container`);
sr.reveal(`.category__data,.trick__content,.footer__content`, {
  interval: 100,
});
sr.reveal(`.about__data,.discount__img`, { origin: "left" });
sr.reveal(`.about__img,.discount__data`, { origin: "right" });
