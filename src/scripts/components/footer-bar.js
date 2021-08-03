class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
   <footer class="footer">
      <div class="share">
        <a href=""><i class="fab fa-facebook"></i></a>
        <a href=""><i class="fab fa-github"></i></a>
        <a href=""><i class="fab fa-instagram"></i></a>
        <a href=""><i class="fab fa-twitter"></i></i></a>
        <a href=""><i class="fab fa-linkedin"></i></a>
      </div>

      <div class="credit">Created By <span>ilzam Afif</span> All Right Reserved</div>
    </footer>
    `;
  }
}

customElements.define("footer-bar", FooterBar);
