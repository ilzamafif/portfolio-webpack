import { HomeTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
          <section class="home">
            
          </section>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector(".home");
    restaurantsContainer.innerHTML = "";
    try {
      restaurantsContainer.innerHTML += HomeTemplate();
    } catch (error) {
      restaurantsContainer.innerHTML = "<error-message></error-message>";
    }
  },
};

export default Home;
