import { productCardTemplate } from "./product-card-template";



export async function fetchProducts(api, productsWrapper) {
  const res = await fetch(`${api}.json`)
  const data = await res.json()

  for (let key in data) {
    productsWrapper.innerHTML += productCardTemplate(data[key], key);
  }
}