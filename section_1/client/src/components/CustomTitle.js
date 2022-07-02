class CustomTitle extends HTMLElement {
  connectedCallback() {
    this._search = {};
    this.render();
  }

  set search(search) {
    this._search = search;
    this.renderSearch();
  }

  render() {
    this.innerHTML = `
      <span></span>
    `;
  }

  renderSearch() {
    const { keyword } = this._search;
    this.innerHTML = `
      <h2 class="text-center mt-3 mb-4">
        Results of "<b>${keyword}</b>"
      </h2>
    `;
  }
}

customElements.define("custom-title", CustomTitle);
