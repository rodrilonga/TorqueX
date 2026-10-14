const productos = [
  {
    categoria: "motor",
    titulo: "Filtro de aceite",
    descripcion: "Filtro de aceite para motor Cronos 1.3.",
    imagen: "img/Filtro-aceite-cronos-1.3.webp",
    precio: 15000,
  },
  {
    categoria: "frenos",
    titulo: "Pastillas de freno",
    descripcion: "Pastillas de freno para Fiat Cronos 1.3.",
    imagen: "img/Pastillas-freno-cronos-1.3.webp",
    precio: 25000,
  },
  {
    categoria: "suspension",
    titulo: "Amortiguador",
    descripcion: "Amortiguadores delanteros para Fiat Cronos 1.3.",
    imagen: "img/Amortiguadores-Del-cronos-1.3.webp",
    precio: 45000,
  },
  {
    categoria: "accesorios",
    titulo: "Alfombra para auto",
    descripcion: "Alfombras originales para Fiat Cronos 1.3.",
    imagen: "img/Alfombras-cronos-1.3.webp",
    precio: 18000,
  },
];

function formatearPrecio(valor) {
  return "$" + valor;
}

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

    <button type="button" class="btn-comprar">Comprar</button>
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

function renderProductos(contenedor, categoria) {
  for (const producto of productos) {
    if (producto.categoria === categoria) {
      contenedor.appendChild(crearCard(producto));
    }
  }
}
