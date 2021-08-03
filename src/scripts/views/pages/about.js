import { AboutTemplate } from "../templates/template-creator";

const About = {
  async render() {
    return `
          <section class="section-about">
            
          </section>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector(".section-about");
    restaurantsContainer.innerHTML = "";
    try {
      restaurantsContainer.innerHTML += AboutTemplate();
    } catch (error) {
      restaurantsContainer.innerHTML = "<error-message></error-message>";
    }
  },
};

export default About;
