class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar navbar-light">
        <section class="d-flex">
          <h1 class="navbar-brand m-0">Books</h1>
          <ul class="d-flex align-items-center ml-1">
            <li id="wishlist">Wishlist</li>
          </ul>
        </section> 
        <search-bar></search-bar>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);
