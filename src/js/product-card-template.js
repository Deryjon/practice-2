export function productCardTemplate(product, id) {
  return `
    <div id="${id}" class="product-item w-[300px] p-5 bg-white shadow-md rounded">
      <div
        class="product-item__image w-full h-[250px] rounded overflow-hidden"
      >
        <img
          src="${product.image}}"
          alt="product image"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="product-item__content">
        <h2
          class="product-item__title text-xl my-3 font-semibold text-emerald-600"
        >
          ${product.name}
        </h2>
        <p class="product-item__description text-sm text-gray-400">
      ${product.desc}
        </p>
        <div
          class="product-item__actions flex justify-between items-center"
        >
          <div class="product-item__price text-xs text-blue-600 my-3">
            Price: <span class="font-bold text-xl">${product.price}</span>
          </div>
          <div class="">
          <button
            class="delete bg-red-800 opacity-90 hover:opacity-100 text-white py-2 px-5 rounded"
          >
            <i class="fas fa-trash pointer-events-none"></i>
          </button>
          <button
            class="btn bg-emerald-800 opacity-90 hover:opacity-100 text-white py-2 px-5 rounded"
          >
            <i class="fas fa-cart-shopping pointer-events-none"></i>
          </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
