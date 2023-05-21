
import { productCardTemplate } from "./product-card-template";


const api =
  "https://to-do-66a0e-default-rtdb.asia-southeast1.firebasedatabase.app/products/iskandar";

const productsWrapper = document.querySelector(".product-list");

// events


// get
export async function fetchProducts() {
  const res = await fetch(`${api}.json`);
  const data = await res.json();
	if (productsWrapper) {
		productsWrapper.textContent = "";
	} 
  for (let key in data) {
    productsWrapper.innerHTML += productCardTemplate(data[key], key);
  }
}
