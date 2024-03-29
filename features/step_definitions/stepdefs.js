const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const { JSDOM } = require("jsdom");

let dom;

Given("I am on the page", () => {
  dom = new JSDOM(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Stanley Yu | Full Stack Developer</title>
      <link rel="stylesheet" href="css/styles.css" />
      <link rel="icon" href="assets/sicon.png" type="image/x-icon" />
    </head>
    <body class="stop-scrolling">
      <main>
        <header>
          <nav>
            <div class="nav nav-container">
              <div class="nav nav-container__logo">
                <h2><a id="main-link" href="index.html">:stanley</a></h2>
              </div>
  
              <div class="nav nav-container__links">
                <ul>
                  <li>
                    <a id="about-link" href="#about-section">About</a>
                  </li>
                  <li>
                    <a id="projects-link" href="#projects-section">Projects</a>
                  </li>
                  <li>
                    <a id="skills-link" href="#skills-section">Skills</a>
                  </li>
                </ul>
              </div>
  
              <div class="nav nav-container__menu--hamburger">
                <div class="bar"></div>
              </div>
            </div>
          </nav>
  
          <div class="header header__content">
            <div class="header header__content--grid">
              <div>
                <h1 class="cover-heading">Hey, i'm Stanley</h1>
                <p class="cover-text">and I like to make things.</p>
                <a id="contact-link" href="#about" class="contact-btn">contact</a>
              </div>
              <div>
                <img id="cover-image" src="assets/me.png" />
              </div>
            </div>
          </div>
        </header>
      </main>
  
      <section id="about-section">
        <article class="article article__container">
          <div class="article article__img-container">
            <img id="self-portrait" src="assets/me3.png" alt="self-portrait" />
          </div>
  
          <div class="global-content-grid">
            <h2 id="about">About</h2>
            <p>
              I'm Stanley, a software engineer. I am a driven, positive and
              growth-focused individual. I am currently undertaking the _Nology
              tech consultancy program. Presently, I am skilled in several
              different languages, tools and frameworks (check out the
              <a href="#skills-section"><mark id="special-link">Skills</mark></a>
              section). I am an avid-problem solver, and I love all things related
              to finance and technology.
            </p>
            <br />
            <p>
              When i'm not programming, you'll find me hiking up a mountain
              somewhere or if it's the Summer, I'll be watching the cricket on my
              couch or fishing near a jetty.
            </p>
            <div class="global-content-grid-social-container">
              <a href="https://www.linkedin.com/in/stanleyyu-swe/" target="_blank"
                ><img class="icon" src="assets/linkedin.png" />
              </a>
              <a href="https://github.com/StanleyY7" target="_blank">
                <img class="icon" src="assets/github.png" />
              </a>
              <a href="mailto:stanleyyu7@gmail.com" target="_blank">
                <img class="icon" src="assets/mailicon.png" />
              </a>
            </div>
          </div>
        </article>
      </section>
  
      <section id="projects-section">
        <aside class="projects">
          <div class="projects__container">
            <h2 id="projects-heading">Projects</h2>
            <div class="projects__grid">
              <div class="projects__grid--col">
                <div class="projects__grid--col-content">
                  <h3>E-Shop</h3>
                  <p>
                    This project involved creating a responsive e-commerce website
                    (using HTML, CSS, SCSS, JS, React and Vite) with its own
                    backend (built on Firestore) and cart system. The backend data
                    is displayed on the frontend.
                  </p>
                  <div class="global-content-grid-social-container2">
                    <a href="https://github.com/StanleyY7/Eshop" target="_blank">
                      <img class="icon" src="assets/giticonwhite.png" />
                    </a>
                    <a href="https://stanleyy7.github.io/Eshop/" target="_blank">
                      <img class="icon" src="assets/link.png" />
                    </a>
                  </div>
                </div>
                <div
                  class="projects__img-container"
                  id="projects__img-container_img1"
                ></div>
              </div>
  
              <div class="projects__grid--col">
                <div class="projects__grid--col-content">
                  <h3>FakeOS</h3>
                  <p>
                    This project involved creating an interactive website (using
                    HTML, CSS, SCSS and JS) that is a mock-up of an Operating
                    System. I chose to base my project on the Mac OSX version
                    10.10: Yosemite.
                  </p>
                  <div class="global-content-grid-social-container2">
                    <a href="https://github.com/StanleyY7/fakeos" target="_blank">
                      <img class="icon" src="assets/giticonwhite.png" />
                    </a>
                    <a href="https://stanleyy7.github.io/fakeos/" target="_blank">
                      <img class="icon" src="assets/link.png" />
                    </a>
                  </div>
                </div>
                <div
                  class="projects__img-container"
                  id="projects__img-container_img2"
                ></div>
              </div>
  
              <div class="projects__grid--col">
                <div class="projects__grid--col-content">
                  <h3>Google Books</h3>
                  <p>
                    This project involved creating a responsive website (using
                    HTML, CSS, SCSS, JS, React and Vite) that fetches data
                    (according to user input) from the Google Books Api and
                    displays it to a grid/modal.
                  </p>
                  <div class="global-content-grid-social-container2">
                    <a
                      href="https://github.com/StanleyY7/googlebooks"
                      target="_blank"
                    >
                      <img class="icon" src="assets/giticonwhite.png" />
                    </a>
                    <a
                      href="https://stanleyy7.github.io/googlebooks/"
                      target="_blank"
                    >
                      <img class="icon" src="assets/link.png" />
                    </a>
                  </div>
                </div>
                <div
                  class="projects__img-container"
                  id="projects__img-container_img3"
                ></div>
              </div>
              <div class="projects__grid--col">
                <div class="projects__grid--col-content">
                  <h3>Minesweeper</h3>
                  <p>
                    This project involved creating a CLI Minesweeper game using
                    Java. In this game the user can input coordinates and the
                    output is rendered as a 2 dimensional string array (all via/on
                    the console).
                  </p>
                  <div class="global-content-grid-social-container2">
                    <a
                      href="https://github.com/StanleyY7/minesweeper"
                      target="_blank"
                    >
                      <img class="icon" src="assets/giticonwhite.png" />
                    </a>
                  </div>
                </div>
                <div
                  class="projects__img-container"
                  id="projects__img-container_img4"
                ></div>
              </div>
            </div>
          </div>
        </aside>
      </section>
  
      <section id="skills-section">
        <article class="skills">
          <div class="skills__container">
            <h2 id="skills-heading">Skills<em>_</em></h2>
            <div class="skills__grid">
              <div class="skills__grid--col">
                <img class="skills-grid-img" src="assets/skills/html5.png" />
              </div>
              <div class="skills__grid--col">
                <img class="skills-grid-img" src="assets/skills/css.png" />
              </div>
              <div class="skills__grid--col">
                <img class="skills-grid-img" src="assets/skills/scss.png" />
              </div>
              <div class="skills__grid--col">
                <img class="skills-grid-img" src="assets/skills/js.png" />
              </div>
              <div class="skills__grid--col">
                <img class="skills-grid-img" src="assets/skills/react.png" />
              </div>
              <div class="skills__grid--col">
                <img class="skills-grid-img" src="assets/skills/java.png" />
              </div>
              <div class="skills__grid--col">
                <img class="skills-grid-img" src="assets/skills/nest.png" />
              </div>
              <div class="skills__grid--col">
                <img class="skills-grid-img" src="assets/skills/spring.png" />
              </div>
              <div class="skills__grid--col">
                <img class="skills-grid-img" src="assets/skills/git.png" />
              </div>
              <div class="skills__grid--col">
                <img class="skills-grid-img" src="assets/skills/firebase.png" />
              </div>
            </div>
          </div>
        </article>
      </section>
  
      <footer>
        <img class="footer-img" src="assets/footergif.gif" />
        <div>
          <script src="js/script.js"></script>
        </div>
      </footer>
    </body>
  </html>
  
  `);
});

// Scenario: Global items should render

Then("I should see all the icons", () => {
  const icons = dom.window.document.querySelectorAll(".icon");
  assert.ok(icons);
  assert.equal(icons.length, 10);
});

// Scenario: Main should render

Then("I should see the header", () => {
  const header = dom.window.document.querySelector("header");
  assert.ok(header);
});

Then("I should see the {string} link", (s) => {
  const links = dom.window.document.querySelectorAll([
    "#main-link",
    "#about-link",
    "#projects-link",
    "#skills-link",
    "#contact-link",
  ]);
  assert.ok(links);
  assert.equal(links.length, 5);
});

Then("I should see {string}", (s) => {
  const coverContent = dom.window.document.querySelectorAll([
    ".cover-heading",
    ".cover-text",
    "#cover-image",
  ]);
  assert.ok(coverContent);
  assert.equal(coverContent.length, 3);
});

// Scenario: About section should render

Then("I should see the {string}", (s) => {
  const aboutContent = dom.window.document.querySelectorAll([
    "#about-section",
    ".global-content-grid",
    ".global-content-grid-social-container",
  ]);
  assert.ok(aboutContent);
  assert.equal(aboutContent.length, 3);
});

// Scenario: Projects section should render

Then("I should see the {string} render", (s) => {
  const projectsContent = dom.window.document.querySelectorAll([
    "#projects-section",
    "#projects-heading",
    ".projects__grid",
    ".projects__grid--col-content",
  ]);
  assert.ok(projectsContent);
  assert.equal(projectsContent.length, 7);
});

// Scenario: Skills section should render

Then("I should see the {string} on the page", (s) => {
  const skillsContent = dom.window.document.querySelectorAll([
    "#skills-section",
    "#skills-heading",
    ".skills__grid",
    ".skills-grid-img",
  ]);
  assert.ok(skillsContent);
  assert.equal(skillsContent.length, 13);
});

// Scenario: Footer should render

Then("I should see the footer image", () => {
  const footerImg = dom.window.document.querySelector(".footer-img");
  assert.ok(footerImg);
});
