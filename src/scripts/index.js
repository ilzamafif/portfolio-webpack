import "regenerator-runtime";

import "../styles/main.scss";

import "./components/navigator-bar";
import "./components/footer-bar";
import App from "./views/app";

const app = new App({
  content: document.querySelector("#content"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
