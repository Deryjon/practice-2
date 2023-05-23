import "./src/assets/tailwind.css";
import { deleteProduct } from "./src/js/delete-product";
import { fetchProducts } from "./src/js/fetch-products";

const productsWrapper = document.querySelector(".product-list");

const api =
  "https://to-do-66a0e-default-rtdb.asia-southeast1.firebasedatabase.app/products/iskandar";

function App() {
  fetchProducts(api, productsWrapper);
}


window.addEventListener("load", App);
productsWrapper.addEventListener('click', deleteProduct)