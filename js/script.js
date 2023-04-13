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

// If entity is in view trigger animations

const element = document.getElementById("eShop");
const element2 = document.getElementById("projects__img-container_img1");

const fakeOS = document.getElementById("fakeOs");
const fakeOsImage = document.getElementById("projects__img-container_img2");

const gBooks = document.getElementById("gBooks");
const gBooksImage = document.getElementById("projects__img-container_img3");

const minesweeper = document.getElementById("minesweeper");
const minesweeperImage = document.getElementById(
  "projects__img-container_img4"
);

if (window.matchMedia("(min-width:1000px)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        element.classList.add("fade-in-left-text");

        element2.classList.add("fade-in-left");
        fakeOS.classList.add("fade-in-right-text");

        fakeOsImage.classList.add("fade-in-right");
        gBooks.classList.add("fade-in-left-text");

        gBooksImage.classList.add("fade-in-left");
        minesweeper.classList.add("fade-in-right-text");

        minesweeperImage.classList.add("fade-in-right");
      }
    },
    { threshold: [0.5] }
  );

  observer.observe(element);
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        element2.classList.add("fade-in-left");
        fakeOsImage.classList.add("fade-in-right");
        gBooksImage.classList.add("fade-in-left");
        minesweeperImage.classList.add("fade-in-right");
      }
    },
    { threshold: [0.5] }
  );

  if ((element2.style.opacity = "1")) {
    element.style.opacity = "1";
    fakeOS.style.opacity = "1";
    gBooks.style.opacity = "1";
    minesweeper.style.opacity = "1";
  }

  observer.observe(element);
}
