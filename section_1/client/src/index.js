import "./scss/main.scss";
import axios from "axios";
import toastr from "toastr";
import 'toastr/build/toastr.css';

const API_URL = process.env.API_URL;

axios.defaults.baseURL = `${API_URL}/api/v1`;

toastr.options.positionClass = "toast-top-center";

const main = () => {
  const searchBar = document.querySelector("search-bar");
  const title = document.querySelector("custom-title");
  const cardList = document.querySelector("card-list");
  const modalContent = document.querySelector("modal-content")
  const wishlist = document.querySelector("#wishlist");

  const onButtonAddWishlistClicked = (item) => {
    axios
        .post("/wishlist", item)
        .then((res) => {
          if (res.status) {
            toastr.success("Book has been added to wishlist successfully")
          }
        })
        .catch((err) => {
          toastr.error(err.message)
        });
  }

  const onButtonRemoveWishlistClicked = (id) => {
    axios
        .delete(`/wishlist/${id}`)
        .then((res) => {
          if (res.status) {
            toastr.success("Book has been removed from wishlist successfully")
            renderWishlist({ page: 1, limit: 10 });
          }
        })
        .catch((err) => {
          toastr.error(err.message)
        });
  }

  const renderMain = () => {
    axios
      .get("/book", { params: { q: "teknologi" } })
      .then((res) => {
        if (res.status) {
          const { data } = res.data;
          cardList.handleClickAdd = onButtonAddWishlistClicked;
          cardList.items = data;
        }
      })
      .catch((err) => {
        cardList.renderError(err);
      });
  };

  const onButtonSearchClicked = (event) => {
    event.preventDefault();
    if (searchBar.value.length > 1) {
      axios
        .get("/book", { params: { q: searchBar.value } })
        .then((res) => {
          if (res.status) {
            title.search = {
              keyword: searchBar.value,
            };
            cardList.handleClickAdd = onButtonAddWishlistClicked;
            cardList.items = res.data.data;
          }
        })
        .catch((err) => cardList.renderError(err));
    } else if (searchBar.value.length < 1) {
      renderMain();
    }
  };

  const renderWishlist = (params) => {
    modalContent.items = [];
    axios
      .get("/wishlist/list", { params })
      .then((res) => {
        if (res.status) {
          const { data } = res.data;
          modalContent.handleClickRemove = onButtonRemoveWishlistClicked;
          modalContent.items = data.docs;
          modalContent.show();
        }
      })
      .catch((err) => {
        toastr.error(err);
      });
  };

  searchBar.onSubmit = onButtonSearchClicked;
  wishlist.addEventListener("click", () => {
    renderWishlist({ page: 1, limit: 10 });
  })
  renderMain();
};

document.addEventListener("DOMContentLoaded", main);
