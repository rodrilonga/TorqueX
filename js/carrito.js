/* ============================================================
   TORQUEX - Carrito de compras
   ------------------------------------------------------------
   Muestra los productos guardados en localStorage y permite
   eliminarlos del carrito.
   ============================================================ */

const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("total-carrito");
const carritoVacio = document.getElementById("carrito-vacio");
const carritoContenido = document.getElementById("carrito-contenido");
const btnVaciar = document.getElementById("btnVaciarCarrito");

let productos = []; /* Se llena desde productos.json */

/* Carga los productos para poder mostrar sus datos en el carrito */
async function initCarrito() {
  try {
    const prefijo = location.pathname.includes("/pages/") ? "../" : "./";
    const respuesta = await fetch(`${prefijo}productos.json`);
    productos = await respuesta.json();
  } catch (error) {
    console.error("Error al cargar productos:", error);
    productos = [];
  }

  renderizarCarrito();
}

/* Renderiza los productos del carrito */
function renderizarCarrito() {
  const carrito = obtenerCarrito();

  if (!carrito || carrito.length === 0) {
    carritoVacio.style.display = "block";
    carritoContenido.style.display = "none";
    return;
  }

  carritoVacio.style.display = "none";
  carritoContenido.style.display = "block";

  listaCarrito.innerHTML = "";
  let total = 0;

  for (const item of carrito) {
    const producto = productos.find((p) => p.id === item.id);
    if (!producto) continue;

    const subtotal = producto.precio * item.cantidad;
    total += subtotal;

    const prefijo = location.pathname.includes("/pages/") ? "../" : "./";

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>
        <div class="carrito-item">
          <img src="${prefijo}${producto.imagen}" alt="${producto.titulo}" class="carrito-img">
          <span>${producto.titulo}</span>
        </div>
      </td>
      <td>${formatearPrecio(producto.precio)}</td>
      <td>${item.cantidad}</td>
      <td>${formatearPrecio(subtotal)}</td>
      <td>
        <button type="button" class="btn-eliminar" data-id="${producto.id}">
          Eliminar
        </button>
      </td>
    `;

    listaCarrito.appendChild(fila);
  }

  totalCarrito.textContent = formatearPrecio(total);
}

/* Elimina un producto del carrito */
function eliminarDelCarrito(productoId) {
  let carrito = obtenerCarrito();
  carrito = carrito.filter((item) => item.id !== productoId);
  guardarCarrito(carrito);
  renderizarCarrito();
}

/* Vacía todo el carrito */
function vaciarCarrito() {
  if (confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
    guardarCarrito([]);
    renderizarCarrito();
  }
}

/* Escucha los clicks de eliminar */
document.addEventListener("click", function (evento) {
  if (evento.target.classList.contains("btn-eliminar")) {
    const productoId = evento.target.getAttribute("data-id");
    eliminarDelCarrito(productoId);
  }

  if (evento.target.id === "btnVaciarCarrito") {
    vaciarCarrito();
  }
});

initCarrito();