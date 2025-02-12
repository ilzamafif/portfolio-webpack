import Home from "../views/pages/home";
import About from "../views/pages/about";
import Detail from "../views/pages/detail_portfolio";
import Contact from "../views/pages/contact";

const routes = {
  "/": Home,
  "/home": Home,
  "/about": About,
  "/detail/:id": Detail,
  "/contact": Contact,
};

export default routes;
