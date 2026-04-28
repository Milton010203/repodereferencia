import type { CartItem } from "../../../types/product";

const cartList = document.getElementById("cartList")!;
const totalElement = document.getElementById("total")!;

function renderCart() {
  const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
  cartList.innerHTML = "";
  if (cart.length === 0) {
    cartList.innerHTML = "<p>El carrito está vacío</p>";
    totalElement.textContent = "0";
    console.log("El carrito esta vacio")
    return;
  }
  let total = 0;
  cart.forEach(item => {
    const row = document.createElement("div");
    row.innerHTML = `
      <h3>${item.nombre}</h3>
      <p>Precio: $${item.precio}</p>
      <p>Cantidad: ${item.quantity}</p>
    `;
    cartList.appendChild(row);
    total += item.precio * item.quantity;
  });
  totalElement.textContent = total.toString();
}

renderCart();
