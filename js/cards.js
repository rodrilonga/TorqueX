const productos = [
  {
    categoria: "motor",
    titulo: "Filtro de aceite",
    descripcion: "Filtro de aceite para motor Cronos 1.3.",
    imagen: "img/Filtro-aceite-fiat-cronos-1.3.webp",
    precio: 15000,
  },
  {
    categoria: "motor",
    titulo: "Kit de Distribución",
    descripcion: "Kit de distribución para motor Cronos 1.3.",
    imagen: "img/Kit-distribucion-fiat-cronos-1.3.webp",
    precio: 30000,
  },
  {
    categoria: "motor",
    titulo: "Correa Poly V",
    descripcion: "Correa Poly V para motor Cronos 1.3.",
    imagen: "img/Correa-polyv-fiat-cronos-1.3.webp",
    precio: 12000,
  },
  {
    categoria: "motor",
    titulo: "Kit de Embrague",
    descripcion: "Kit de embrague para motor Cronos 1.3.",
    imagen: "img/Kit-embrague-fiat-cronos-1.3.webp",
    precio: 200000,
  },
  {
    categoria: "motor",
    titulo: "Bomba de agua",
    descripcion: "Bomba de agua para motor Cronos 1.3.",
    imagen: "img/Bomba-de-agua-fiat-cronos-1.3.webp",
    precio: 75000,
  },
  {
    categoria: "motor",
    titulo: "Kit de Inyectores",
    descripcion: "Kit de inyectores para motor Cronos 1.3.",
    imagen: "img/Kit-4-inyectores-fiat-cronos-1.3.webp",
    precio: 40000,
  },
  {
    categoria: "frenos",
    titulo: "Pastillas de freno",
    descripcion: "Pastillas de freno para Fiat Cronos 1.3.",
    imagen: "img/Pastillas-freno-fiat-cronos-1.3.webp",
    precio: 25000,
  },
  {
    categoria: "frenos",
    titulo: "Discos de freno",
    descripcion: "Discos de freno para Fiat Cronos 1.3.",
    imagen: "img/Discos-de-frenos-fiat-cronos-1.3.webp",
    precio: 30000,
  },
  {
    categoria: "frenos",
    titulo: "Campanas de freno",
    descripcion: "Campanas de freno para Fiat Cronos 1.3.",
    imagen: "img/Campanas-de-frenos-fiat-cronos-1.3.webp",
    precio: 20000,
  },
  {
    categoria: "frenos",
    titulo: "Cintas de freno",
    descripcion: "Cintas de freno para Fiat Cronos 1.3.",
    imagen: "img/Cintas-de-frenos-fiat-cronos-1.3.webp",
    precio: 15000,
  },
  {
    categoria: "frenos",
    titulo: "cable de freno de mano",
    descripcion: "cable de freno de mano para Fiat Cronos 1.3.",
    imagen: "img/Cable-de-freno-fiat-cronos-1.3.webp",
    precio: 10000,
  },
  {
    categoria: "frenos",
    titulo: "Flexible de freno",
    descripcion: "Flexible de freno para Fiat Cronos 1.3.",
    imagen: "img/Flexible-de-freno-fiat-cronos-1.3.webp",
    precio: 8000,
  },
  {
    categoria: "suspension",
    titulo: "Amortiguador",
    descripcion: "Amortiguadores delanteros para Fiat Cronos 1.3.",
    imagen: "img/Amortiguadores-Del-fiat-cronos-1.3.webp",
    precio: 45000,
  },
  {
    categoria: "suspension",
    titulo: "Cazoletas de suspensión",
    descripcion: "Cazoletas de suspensión para Fiat Cronos 1.3.",
    imagen: "img/Cazoletas-fiat-cronos-1.3.webp",
    precio: 98000,
  },
  {
    categoria: "suspension",
    titulo: "Bieletas de barra estabilizadora",
    descripcion: "Bieletas de barra estabilizadora para Fiat Cronos 1.3.",
    imagen: "img/Bieletas-fiat-cronos-1.3.webp",
    precio: 14000,
  },
  {
    categoria: "suspension",
    titulo: "Parrillas de suspension",
    descripcion: "Parrillas de suspensión para Fiat Cronos 1.3.",
    imagen: "img/Parrillas-de-suspension-fiat-cronos-1.3.webp",
    precio: 40000,
  },
  {
    categoria: "suspension",
    titulo: "Cremallera de dirección",
    descripcion: "Cremallera de dirección electrica para Fiat Cronos 1.3.",
    imagen: "img/Cremallera-direccion-fiat-cronos-1.3.webp",
    precio: 150000,
  },
  {
    categoria: "suspension",
    titulo: "Espirales de suspensión",
    descripcion: "Espirales de suspensión delanteros para Fiat Cronos 1.3.",
    imagen: "img/Espirales-delanteros-fiat-cronos-1.3.webp",
    precio: 80000,
  },
  {
    categoria: "accesorios",
    titulo: "Alfombra para auto",
    descripcion: "Alfombras originales para Fiat Cronos 1.3.",
    imagen: "img/Alfombras-fiat-cronos-1.3.webp",
    precio: 18000,
  },
  {
    categoria: "accesorios",
    titulo: "Escobillas limpiaparabrisas",
    descripcion: "Escobillas limpiaparabrisas originales para Fiat Cronos 1.3.",
    imagen: "img/Escobillas-limpiaparabrisas-fiat-cronos-1.3.webp",
    precio: 12000,
  },
  {
    categoria: "accesorios",
    titulo: "Cachas de espejos",
    descripcion: "Cachas de espejos originales para Fiat Cronos 1.3.",
    imagen: "img/Cacha-espejo-retrovisor-fiat-cronos-1.3.webp",
    precio: 7000,
  },
  {
    categoria: "accesorios",
    titulo: "red de carga",
    descripcion: "red de carga original para Fiat Cronos 1.3.",
    imagen: "img/Red-elastica-fiat-cronos-1.3.webp",
    precio: 5000,
  },
  {
    categoria: "accesorios",
    titulo: "tuercas antirrobo",
    descripcion: "tuercas antirrobo originales para Fiat Cronos 1.3.",
    imagen: "img/Tuercas-antirrobo-fiat-cronos-1.3.webp",
    precio: 10000,
  },
  {
    categoria: "accesorios",
    titulo: "Chapon cubre cárter",
    descripcion: "Chapon cubre cárter original para Fiat Cronos 1.3.",
    imagen: "img/Chapon-cubrecarter-fiat-cronos-1.3.webp",
    precio: 120000,
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
