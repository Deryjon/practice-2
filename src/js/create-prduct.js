import { fetchProducts } from "./fetch-products";


const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const imgInput = document.querySelector("#image");
const description = document.querySelector("#description");

const api =
  "https://to-do-66a0e-default-rtdb.asia-southeast1.firebasedatabase.app/products/iskandar";
// EVENTS

// FUNCTIONS

// post
export async function createProduct(e) {
  e.preventDefault();
  const nameValue = nameInput.value.trim();
  const priceValue = priceInput.value.trim();
  const imageValue = imgInput.value;
  const descValue = description.value;

  if (!nameValue || !priceValue || !imageValue || !descValue) return;

  const res = await fetch(`${api}.json`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: nameValue,
      price: priceValue,
      image: imageValue,
      desc: descValue,
    }),
  });
  const data = await res.json();
  fetchProducts();
  nameInput.value = "";
  priceInput.value = "";
  imgInput.value = "";
  description.value = "";

}
