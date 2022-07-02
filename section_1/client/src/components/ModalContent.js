class ModalContent extends HTMLElement {

  set items(item) {
    this._items = item;
    this.render();
  }

  set handleClickRemove(event) {
    this._handleClickRemove = event;
  }

  show() {
    this.style.display = "block";
  }

  hide() {
    this.style.display = "none";
  }

  render() {
    const items = this._items
    this.innerHTML = `
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">Wishlist</h2>
            <button type="button" class="close" aria-label="Close"><span aria-hidden="true">×</span></button>
          </div>
          <div class="modal-body">
            <card-list></card-list>
          </div>
        </div>
    `;

    const cardList = this.querySelector('card-list');
    cardList.handleClickRemove = this._handleClickRemove;
    cardList.items = items;

    const closeButton = this.querySelector('.close');
    closeButton.addEventListener("click", () => this.hide());

    window.onclick = (event) => {
      if (event.target == this) {
        this.style.display = "none";
      }
    }
  }
}

customElements.define("modal-content", ModalContent);
  