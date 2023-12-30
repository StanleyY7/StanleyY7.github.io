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

let observerOptions = {
  threshold: 0.95,
};

if (window.matchMedia("(min-width:650px)").matches) {
  const elementObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      element.classList.add("fade-in-left-text");
    }
  }, observerOptions);

  const element2Observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      element2.classList.add("fade-in-left");
    }
  }, observerOptions);

  const fakeOSObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      fakeOS.classList.add("fade-in-right-text");
    }
  }, observerOptions);

  const fakeOsImageObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      fakeOsImage.classList.add("fade-in-right");
    }
  }, observerOptions);

  const gBooksObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      gBooks.classList.add("fade-in-left-text");
    }
  }, observerOptions);

  const gBooksImageObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      gBooksImage.classList.add("fade-in-left");
    }
  }, observerOptions);

  const minesweeperObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      minesweeper.classList.add("fade-in-right-text");
    }
  }, observerOptions);

  const minesweeperImageObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      minesweeperImage.classList.add("fade-in-right");
    }
  }, observerOptions);

  elementObserver.observe(element);
  element2Observer.observe(element2);
  fakeOSObserver.observe(fakeOS);
  fakeOsImageObserver.observe(fakeOsImage);
  gBooksObserver.observe(gBooks);
  gBooksImageObserver.observe(gBooksImage);
  minesweeperObserver.observe(minesweeper);
  minesweeperImageObserver.observe(minesweeperImage);
} else {
  observerOptions = {
    threshold: 0.4,
  };
  const element2Observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      element2.classList.add("fade-in-left");
    }
  }, observerOptions);

  const fakeOsImageObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      fakeOsImage.classList.add("fade-in-right");
    }
  }, observerOptions);

  const gBooksImageObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      gBooksImage.classList.add("fade-in-left");
    }
  }, observerOptions);

  const minesweeperImageObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      minesweeperImage.classList.add("fade-in-right");
    }
  }, observerOptions);

  element2Observer.observe(element2);
  fakeOsImageObserver.observe(fakeOsImage);
  gBooksImageObserver.observe(gBooksImage);
  minesweeperImageObserver.observe(minesweeperImage);
}
