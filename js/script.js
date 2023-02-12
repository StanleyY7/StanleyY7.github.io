// DOM Variables

const hamburger_menu = document.querySelector(
  ".nav-container__menu--hamburger"
);
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".nav-container__links a");
const header = document.querySelector(".nav-container");

// General Functions

window.addEventListener("scroll", () => {
  header.style.backgroundColor = window.scrollY > 0 ? "#ffffff" : "transparent";
});

const copyright = () => {
  document.write("&copy" + new Date().getFullYear() + " Stanley Yu ");
};

window.onload = copyright();

// Hamburger Menu Functions

const closeMenu = () => {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
};

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));
