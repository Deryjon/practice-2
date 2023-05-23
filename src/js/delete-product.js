export async function deleteProduct(e) {
  const target = e.target;
  if (!target.classList.contains("delete")) return;
  const productId = target.getAttribute("data-key");
	const areYouSure = confirm("Are you are?")
	if(areYouSure){

		const res = await fetch(`${api}/${productId}.json`, {
			method: "DELETE",
		});
	}
}
