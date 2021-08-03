import { ContactTemplate } from "../templates/template-creator";

const Contact = {
  async render() {
    return `
          <section class="contact">
            
          </section>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector(".contact");
    restaurantsContainer.innerHTML = "";
    try {
      restaurantsContainer.innerHTML += ContactTemplate();
    } catch (error) {
      restaurantsContainer.innerHTML = "<error-message></error-message>";
    }
  },
};

export default Contact;
