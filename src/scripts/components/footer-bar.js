class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
   <footer class="footer">
      <div class="share">
        <a href="https://github.com/ilzamafif"><i class="fab fa-github"></i></a>
        <a href="https://twitter.com/35679975h"><i class="fab fa-twitter"></i></i></a>
        <a href="https://www.linkedin.com/m/in/ilzam-afif-2117321a9"><i class="fab fa-linkedin"></i></a>
      </div>

      <div class="credit">Created By <span>ilzam Afif</span> All Right Reserved</div>
    </footer>
    `;
  }
}

customElements.define("footer-bar", FooterBar);
