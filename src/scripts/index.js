import "regenerator-runtime";

import "../styles/main.scss";

import "./components/navigator-bar";
import "./components/footer-bar";
import App from "./views/app";

const app = new App({
  content: document.querySelector("#content"),
});

window.addEventListener("hashchange", () => {
  console.log("Hash changed");
  app.renderPage();
});

window.addEventListener("load", () => {
  console.log("Window loaded");
  app.renderPage();
});