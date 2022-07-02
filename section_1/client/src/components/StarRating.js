class StarRating extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  /* connectedCallback() {
    this.render();
  } */

  set rating(rating) {
    this._rating = rating;
    this.render();
  }

  render() {
    const rating = this._rating || 0
    this.shadowDOM.innerHTML = `
      <style>
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      }
      :host > i {
        text-align:left;
        font-style:normal;
        display:inline-block;
        position: relative;
        unicode-bidi: bidi-override;
      }
      :host > i::before {
        display:block;
        content: '★★★★★';
        color: #ccc;
      }
      :host > i::after {
        white-space:nowrap;
        position:absolute;
        top:0;
        left:0;
        content: '★★★★★';
        width: 0;
        color: orange;
        overflow:hidden;
        height:100%;
        width: calc(${rating}/5 * 100%);
      }
      </style>
      <i class="star-${rating}"></i>
    `;
  }
}
  
customElements.define("star-rating", StarRating);
  