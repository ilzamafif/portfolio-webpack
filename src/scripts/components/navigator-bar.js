class NavigatorBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="header">
      <a href="#" class="logo">Ilzam Afif</a>

      <div id="menu-bar">
        <i class="fas fa-bars"></i>
      </div>

      <nav class="navbar">
        <a href="#/home">Home</a>
        <a href="#home">Blog</a>
        <a href="#/about">About</a>
        <a href="#/contact">Contact</a>
      </nav>
    </header>
    `;
  }
}

customElements.define("navigator-bar", NavigatorBar);
