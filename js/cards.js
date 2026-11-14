/* ============================================================
   TORQUEX - Cards de producto
   ------------------------------------------------------------
   Carga los productos desde productos.json mediante fetch()
   y genera las tarjetas con imagen, título, descripción,
   precio, controles de cantidad y botón "Añadir al carrito".
   ============================================================ */

/* Array que se llena con los datos del JSON */
let productos = [];

/* Formatea un número como precio */
function formatearPrecio(valor) {
  return "$" + valor;
}

/* Trae los productos desde el archivo JSON */
async function cargarProductos() {
  try {
    const prefijo = location.pathname.includes("/pages/") ? "../" : "./";
    const respuesta = await fetch(`${prefijo}productos.json`);
    if (!respuesta.ok) {
      throw new Error("No se pudo cargar el archivo de productos");
    }
    productos = await respuesta.json();
  } catch (error) {
    console.error("Error al cargar productos:", error);
    productos = [];
  }
}

/* Crea la card de un producto */
function crearCard(producto) {
  const prefijo = location.pathname.includes("/pages/") ? "../" : "./";

  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML = `
    <img src="${prefijo}${producto.imagen}" alt="${producto.titulo}">
    <h3>${producto.titulo}</h3>
    <p>${producto.descripcion}</p>
    <p class="precio">${formatearPrecio(producto.precio)}</p>

    <div class="cantidad">
      <button type="button" class="btn-restar">-</button>
      <span class="numero-cantidad">1</span>
      <button type="button" class="btn-sumar">+</button>
    </div>

    <p class="subtotal">Subtotal: ${formatearPrecio(producto.precio)}</p>

    <button type="button" class="btn-agregar" data-id="${producto.id}">
      Agregar al carrito
    </button>
  `;

  const btnRestar = card.querySelector(".btn-restar");
  const btnSumar = card.querySelector(".btn-sumar");
  const numeroCantidad = card.querySelector(".numero-cantidad");
  const subtotal = card.querySelector(".subtotal");

  let cantidad = 1;

  function actualizarCantidad() {
    numeroCantidad.textContent = cantidad;
    subtotal.textContent =
      "Subtotal: " + formatearPrecio(producto.precio * cantidad);
  }

  function restar() {
    if (cantidad > 1) {
      cantidad = cantidad - 1;
      actualizarCantidad();
    }
  }

  function sumar() {
    cantidad = cantidad + 1;
    actualizarCantidad();
  }

  btnRestar.addEventListener("click", restar);
  btnSumar.addEventListener("click", sumar);

  return card;
}

/* Muestra en la página las cards de una categoría */
function renderProductos(contenedor, categoria) {
  contenedor.innerHTML = "";

  for (const producto of productos) {
    if (producto.categoria === categoria) {
      contenedor.appendChild(crearCard(producto));
    }
  }
}

/* Muestra los primeros N productos de cada categoría (para el home) */
function renderHomeProductos(contenedor) {
  contenedor.innerHTML = "";

  const categorias = ["motor", "frenos", "suspension", "accesorios"];
  const productosPorCategoria = 3;

  for (const categoria of categorias) {
    let mostrados = 0;
    for (const producto of productos) {
      if (producto.categoria === categoria && mostrados < productosPorCategoria) {
        contenedor.appendChild(crearCard(producto));
        mostrados++;
      }
    }
  }
}

/* Devuelve los productos de una categoría */
function obtenerProductosPorCategoria(categoria) {
  return productos.filter((p) => p.categoria === categoria);
}

/* Devuelve un producto por su ID */
function obtenerProductoPorId(id) {
  return productos.find((p) => p.id === id);
}

/* Inicializa la carga de productos */
cargarProductos();