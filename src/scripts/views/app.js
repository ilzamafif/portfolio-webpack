import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    console.log("Rendering Page");
    const url = UrlParser.parseActiveUrlWithCombiner();
    console.log("Parsed URL:", url);
    const page = routes[url];
    console.log("Matched Page:", page);
    if (page) {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } else {
      this._content.innerHTML = "<error-message>Page not found</error-message>";
    }
  }
}

export default App;