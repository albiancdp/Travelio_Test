import "./CustomCard.js";

class CardList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
    this._items = [];
  }

  connectedCallback() {
    this.render();
  }

  set items(item) {
    this._items = item;
    this.render();
  }

  set handleClickAdd(event) {
    this._handleClickAdd = event;
  }

  set handleClickRemove(event) {
    this._handleClickRemove = event;
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
      :host > h2 {
          color: red;
          text-align: center;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
      <h2>${message}</h2>
    `;
  }

  render() {
    this.shadowDOM.innerHTML = "";
    if (this._items.length > 0) {
      const style = document.createElement("style");
      style.textContent = `
        :host {
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 992px) {
          :host {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem 1rem;
          }
        }
      `;
      this.shadowDOM.appendChild(style);
      this._items.forEach((item) => {
        const cardItem = document.createElement("custom-card");
        cardItem.onClickAdd = this._handleClickAdd;
        cardItem.onClickRemove = this._handleClickRemove;
        cardItem.item = item;
        this.shadowDOM.appendChild(cardItem);
      });
    } else {
      this.shadowDOM.innerHTML = `
        <style>
        :host {
          align-items: center;
          display: flex;
          justify-content: center;
          padding: 1rem;
          text-align: center;
        }

        :host > span {
          font-weight: bold;
          margin: auto;
        }
        </style>
        <span>Loading...</span>
      `;
    }
  }
}

customElements.define("card-list", CardList);
