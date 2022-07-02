class CustomFooter extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      }
      :host > footer {
        background-color: #58c714;
        color: #202020;
        font-size: smaller;
        margin-top: auto;
        padding: 1rem;
        text-align: center;
      }
      </style>
      <footer>
        <p>Books &copy; 2021. All rights reserved.</p>
      </footer>
    `;
  }
}

customElements.define("custom-footer", CustomFooter);
