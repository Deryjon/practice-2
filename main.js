import "./src/assets/tailwind.css";
import { createProduct } from "./src/js/create-prduct";
// import { deleteProduct } from "./src/js/delete-product";
import { fetchProducts } from "./src/js/fetch-products";

const createBtn = document.querySelector("#create");
const productsWrapper = document.querySelector(".product-list");

const api =
  "https://to-do-66a0e-default-rtdb.asia-southeast1.firebasedatabase.app/products/iskandar";


// EVENTS
window.addEventListener("load", fetchProducts);
createBtn.addEventListener("click", createProduct);
productsWrapper.addEventListener("click", deleteProduct);



async function deleteProduct(e) {
	const target = e.target
	const productElement = target.parentElement.parentElement.parentElement.parentElement
	console.log(target);
	if(!target.classList.contains("delete")) return;
	const res = await fetch(`${api}/${productElement.id}.json`, {
		method: "DELETE"
	})
	fetchProducts()

	}