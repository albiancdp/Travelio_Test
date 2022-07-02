class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set onSubmit(event) {
    this._eventClick = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchInput").value;
  }

  render() {
    this.innerHTML = `
      <style>
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
          display: none;
        }
      </style>
      <form id="searchForm" class="d-flex w-100">
        <input
          id="searchInput"
          class="form-control me-2 ps-2 w-100"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-light" type="submit">
          Search
        </button>
      </form>
    `;

    this.querySelector("#searchForm").addEventListener(
      "submit",
      this._eventClick
    );
  }
}

customElements.define("search-bar", SearchBar);
