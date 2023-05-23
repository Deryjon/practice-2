const api =
    "https://to-do-66a0e-default-rtdb.asia-southeast1.firebasedatabase.app/products/iskandar";

export async function deleteProduct(e) {
    const target = e.target
    if (!target.classList.contains('delete-btn')) return
    const productId = target.getAttribute('data-key')
    const areYouSure = confirm('Are you sure?')
    if (areYouSure) {
        const res = await fetch(`${api}/${productId}.json`, { method: "DELETE" })
        window.location.reload()
    }
}