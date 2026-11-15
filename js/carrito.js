/* Elementos */
const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("total-carrito");
const carritoVacio = document.getElementById("carrito-vacio");
const carritoContenido = document.getElementById("carrito-contenido");

/* Número del negocio*/
const NUMERO_WHATSAPP = "543518128783";

/* Render */
function renderizarCarrito() {
  const carrito = obtenerCarrito();

  if (carrito.length === 0) {
    carritoVacio.style.display = "block";
    carritoContenido.style.display = "none";
    return;
  }

  carritoVacio.style.display = "none";
  carritoContenido.style.display = "block";

  listaCarrito.innerHTML = "";
  let total = 0;
  let mostrados = 0;

  const prefijo = location.pathname.includes("/pages/") ? "../" : "./";

  for (const item of carrito) {
    const producto = obtenerProductoPorId(item.id);

    /* Producto inexistente */
    if (!producto) {
      continue;
    }

    const subtotal = producto.precio * item.cantidad;
    total += subtotal;
    mostrados++;

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>
        <div class="carrito-item">
          <img src="${prefijo}${producto.imagen}" alt="${producto.titulo}"
               class="carrito-img" loading="lazy" decoding="async">
          <span>${producto.titulo}</span>
        </div>
      </td>
      <td>${formatearPrecio(producto.precio)}</td>
      <td>${item.cantidad}</td>
      <td>${formatearPrecio(subtotal)}</td>
      <td>
        <button type="button" class="btn-eliminar" data-id="${producto.id}"
                aria-label="Eliminar ${producto.titulo}">
          Eliminar
        </button>
      </td>
    `;

    listaCarrito.appendChild(fila);
  }

  /* Carrito vacío */
  if (mostrados === 0) {
    carritoVacio.style.display = "block";
    carritoContenido.style.display = "none";
    return;
  }

  totalCarrito.textContent = formatearPrecio(total);
}

/* Eliminar */
function eliminarDelCarrito(productoId) {
  const carrito = obtenerCarrito();
  const nuevoCarrito = [];

  for (const item of carrito) {
    if (item.id !== productoId) {
      nuevoCarrito.push(item);
    }
  }

  guardarCarrito(nuevoCarrito);
  renderizarCarrito();
}

/* Vaciar */
function vaciarCarrito() {
  if (confirm("¿Estás seguro de que querés vaciar el carrito?")) {
    guardarCarrito([]);
    renderizarCarrito();
  }
}

/* WhatsApp */
function armarMensaje() {
  const carrito = obtenerCarrito();
  const lineas = ["Hola TorqueX, quiero realizar este pedido:", ""];
  let total = 0;

  for (const item of carrito) {
    const producto = obtenerProductoPorId(item.id);

    if (!producto) {
      continue;
    }

    const subtotal = producto.precio * item.cantidad;
    total += subtotal;
    lineas.push(
      `- ${producto.titulo} x${item.cantidad}: ${formatearPrecio(subtotal)}`,
    );
  }

  lineas.push("");
  lineas.push("Total: " + formatearPrecio(total));

  return lineas.join("\n");
}

function comprarPorWhatsapp() {
  const mensaje = encodeURIComponent(armarMensaje());
  const url = "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + mensaje;

  window.open(url, "_blank");
}

/* Eventos */
document.addEventListener("click", function (evento) {
  if (evento.target.classList.contains("btn-eliminar")) {
    const productoId = evento.target.getAttribute("data-id");
    eliminarDelCarrito(productoId);
  }

  if (evento.target.id === "btnVaciarCarrito") {
    vaciarCarrito();
  }

  if (evento.target.id === "btnWhatsapp") {
    comprarPorWhatsapp();
  }
});

/* Inicio */
productosListos.then(function () {
  renderizarCarrito();
});
