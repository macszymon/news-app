const currentDate = new Date();
const dateEl = document.getElementById("date");
const hamburgerEl = document.querySelector(".nav__hamburger");
const navListEl = document.querySelector(".nav__list")

dateEl.innerHTML = currentDate.toDateString();

hamburgerEl.addEventListener("click", () => {
  hamburgerEl.classList.toggle("nav__hamburger-clicked");
  navListEl.classList.toggle("hide");
});
