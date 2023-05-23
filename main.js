import "./src/assets/tailwind.css";
import { createProduct } from "./src/js/create-product";
import { fetchProducts } from "./src/js/fetch-products";
import { deleteProduct } from "./src/js/delete-product";

const productsWrapper = document.querySelector(".product-list");

const api =
  "https://to-do-66a0e-default-rtdb.asia-southeast1.firebasedatabase.app/products/iskandar";



// EVENTS
window.addEventListener("load", fetchProducts);
productsWrapper.addEventListener('click', deleteProduct)

