
const createProductBtn = document.querySelector("#create");


const api =
  "https://to-do-66a0e-default-rtdb.asia-southeast1.firebasedatabase.app/products/iskandar";

	createProductBtn.addEventListener("click", createProduct)

export async function createProduct(e) {
  e.preventDefault();
  const productName = document.querySelector("#name").value;
  const productPrice = document.querySelector("#price").value;
  const productImage = document.querySelector("#image").value;
  const productDescription = document.querySelector("#description").value;
  if (!productName) return;
  if (!productPrice) return;
  if (!productImage) return;
  if (!productDescription) return;

  const req = {
    name: productName,
    price: productPrice,
    image: productImage,
    description: productDescription,
  };

  const res = await fetch(`${api}.json`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(req),
  });

  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
  document.querySelector("#image").value = "";
  document.querySelector("#description").value = "";
	window.open("../../index.html", "_self")
}
