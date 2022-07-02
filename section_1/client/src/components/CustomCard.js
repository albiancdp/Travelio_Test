import "./StarRating";

class CustomCard extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set item(item) {
    this._item = item;
    this.render();
  }

  set onClickAdd(event) {
    this._onClickAdd = event;
  }

  set onClickRemove(event) {
    this._onClickRemove = event;
  }

  renderButton(isIdExist) {
    if (isIdExist) {
      return `
        <button class="error remove-from-wishlist" type="button">
          Remove from Wishlist
        </button>
      `
    }
    return `
      <button class="success add-to-wishlist" type="button">
        Add to Wishlist
      </button>
    `
  }

  render() {
    const newItem = this._item || {};
    const {
      _id,
      thumbnail = "",
      title = "-",
      rating = 4.1,
      author = [],
      description = "-",
    } = newItem;
    const newDescription =
      description.length > 300 ? `${description.slice(0, 300 - 3)} ...` : description;
    this.shadowDOM.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :host {
          padding-bottom: 1rem;
        }

        :host > article {
          background-color: #fff;
          border-radius: 1rem;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 -2px 8px 0 rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        :host > article > img {
          border-radius: 0.5rem;
          margin: 1rem;
          max-width: 15rem;
          min-height: 20rem;
          object-fit: contain;
        }

        :host > article > section {
          display: flex;
          flex-direction: column;
          padding: 1rem;
        }

        :host > article > section > h3 {
          margin-bottom: 0;
          margin-top: 0;
        }

        :host > article > section > ul {
          margin-bottom: 0.5rem;
        }

        :host > article > section > ul > li {
          list-style-type: none;
          margin-top: 0.5rem;
        }

        :host > article > section > p {
          text-align: justify;
          text-indent: 1rem;
          margin-bottom: 1rem;
        }

        :host > article > section > button {
          align-items: center;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
          display: flex;
          font-size: 0.875rem;
          font-weight: 500;
          justify-content: center;
          line-height: 1.125rem;
          margin-top: auto;
          padding: 0.5rem 1rem;
        }

        :host > article > section > button.success {
          background-color: #04AA6D;
          color: #ffffff;
        }

        :host > article > section > button.error {
          background-color: #f44336;
          color: #ffffff;
        }

        @media (min-width: 992px) {
          :host {
            padding-bottom 0rem;
          }

          :host > article {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            flex-direction: row;
          }

          :host > article > img {
            align-self: start;
          }
        }
      </style>
      <article>
        <img alt="abc" src="${thumbnail}">
        <section>
          <h3>${title}</h3>
          <ul>
            <li><strong>Rating:</strong> <star-rating></star-rating></li>
            <li><strong>Author:</strong> ${author.join(", ")}</li>
          </ul>
          <h4>Description</h4>
          <p>${newDescription}</p>
          ${this.renderButton(!!_id)}
        </section>
      </article>
    `;

    const element = this.shadowRoot.querySelector('star-rating');
    element.rating = rating

    if (!!_id) {
      this.shadowRoot.querySelector(".remove-from-wishlist").addEventListener(
        "click",
        () => this._onClickRemove(_id)
      );
    } else {
      this.shadowRoot.querySelector(".add-to-wishlist").addEventListener(
        "click",
        () => this._onClickAdd(newItem)
      );
    }
  }
}

customElements.define("custom-card", CustomCard);
