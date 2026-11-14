/* ============================================================
   TORQUEX - Cards de producto
   ------------------------------------------------------------
   Carga los productos desde productos.json mediante fetch()
   y genera las tarjetas con imagen, título, descripción,
   precio, controles de cantidad y botón "Añadir al carrito".
   ============================================================ */

/* Array global con los productos. Se llena desde el JSON o
   desde los datos de respaldo si falla el fetch. */
let productos = [];

/* Formatea un número como precio */
function formatearPrecio(valor) {
  return "$" + valor;
}

/* Datos estáticos de respaldo si falla el fetch (para probar
   abriendo el HTML directamente sin servidor). Incluye varios
   productos por categoría para que se vea bien. */
const PRODUCTOS_RESPALDO = [
  /* Motor */
  {
    id: "motor-1",
    categoria: "motor",
    titulo: "Filtro de aceite",
    descripcion: "Filtro de aceite para motor Cronos 1.3.",
    imagen: "img/Filtro-aceite-fiat-cronos-1.3.webp",
    precio: 15000
  },
  {
    id: "motor-2",
    categoria: "motor",
    titulo: "Kit de Distribución",
    descripcion: "Kit de distribución para motor Cronos 1.3.",
    imagen: "img/Kit-distribucion-fiat-cronos-1.3.webp",
    precio: 30000
  },
  {
    id: "motor-3",
    categoria: "motor",
    titulo: "Correa Poly V",
    descripcion: "Correa Poly V para motor Cronos 1.3.",
    imagen: "img/Correa-polyv-fiat-cronos-1.3.webp",
    precio: 12000
  },
  {
    id: "motor-4",
    categoria: "motor",
    titulo: "Kit de Embrague",
    descripcion: "Kit de embrague para motor Cronos 1.3.",
    imagen: "img/Kit-embrague-fiat-cronos-1.3.webp",
    precio: 200000
  },
  {
    id: "motor-5",
    categoria: "motor",
    titulo: "Bomba de agua",
    descripcion: "Bomba de agua para motor Cronos 1.3.",
    imagen: "img/Bomba-de-agua-fiat-cronos-1.3.webp",
    precio: 75000
  },
  /* Frenos */
  {
    id: "frenos-1",
    categoria: "frenos",
    titulo: "Pastillas de freno",
    descripcion: "Pastillas de freno para Fiat Cronos 1.3.",
    imagen: "img/Pastillas-freno-fiat-cronos-1.3.webp",
    precio: 25000
  },
  {
    id: "frenos-2",
    categoria: "frenos",
    titulo: "Discos de freno",
    descripcion: "Discos de freno para Fiat Cronos 1.3.",
    imagen: "img/Discos-de-frenos-fiat-cronos-1.3.webp",
    precio: 30000
  },
  {
    id: "frenos-3",
    categoria: "frenos",
    titulo: "Campanas de freno",
    descripcion: "Campanas de freno para Fiat Cronos 1.3.",
    imagen: "img/Campanas-de-frenos-fiat-cronos-1.3.webp",
    precio: 20000
  },
  {
    id: "frenos-4",
    categoria: "frenos",
    titulo: "Cintas de freno",
    descripcion: "Cintas de freno para Fiat Cronos 1.3.",
    imagen: "img/Cintas-de-frenos-fiat-cronos-1.3.webp",
    precio: 15000
  },
  {
    id: "frenos-5",
    categoria: "frenos",
    titulo: "Cable de freno de mano",
    descripcion: "Cable de freno de mano para Fiat Cronos 1.3.",
    imagen: "img/Cable-de-freno-fiat-cronos-1.3.webp",
    precio: 10000
  },
  /* Suspensión */
  {
    id: "suspension-1",
    categoria: "suspension",
    titulo: "Amortiguador",
    descripcion: "Amortiguadores delanteros para Fiat Cronos 1.3.",
    imagen: "img/Amortiguadores-Del-fiat-cronos-1.3.webp",
    precio: 45000
  },
  {
    id: "suspension-2",
    categoria: "suspension",
    titulo: "Cazoletas de suspensión",
    descripcion: "Cazoletas de suspensión para Fiat Cronos 1.3.",
    imagen: "img/Cazoletas-fiat-cronos-1.3.webp",
    precio: 98000
  },
  {
    id: "suspension-3",
    categoria: "suspension",
    titulo: "Bieletas de barra estabilizadora",
    descripcion: "Bieletas de barra estabilizadora para Fiat Cronos 1.3.",
    imagen: "img/Bieletas-fiat-cronos-1.3.webp",
    precio: 14000
  },
  {
    id: "suspension-4",
    categoria: "suspension",
    titulo: "Parrillas de suspensión",
    descripcion: "Parrillas de suspensión para Fiat Cronos 1.3.",
    imagen: "img/Parrillas-de-suspension-fiat-cronos-1.3.webp",
    precio: 40000
  },
  {
    id: "suspension-5",
    categoria: "suspension",
    titulo: "Cremallera de dirección",
    descripcion: "Cremallera de dirección eléctrica para Fiat Cronos 1.3.",
    imagen: "img/Cremallera-direccion-fiat-cronos-1.3.webp",
    precio: 150000
  },
  /* Accesorios */
  {
    id: "accesorios-1",
    categoria: "accesorios",
    titulo: "Alfombra para auto",
    descripcion: "Alfombras originales para Fiat Cronos 1.3.",
    imagen: "img/Alfombras-fiat-cronos-1.3.webp",
    precio: 18000
  },
  {
    id: "accesorios-2",
    categoria: "accesorios",
    titulo: "Escobillas limpiaparabrisas",
    descripcion: "Escobillas limpiaparabrisas originales para Fiat Cronos 1.3.",
    imagen: "img/Escobillas-limpiaparabrisas-fiat-cronos-1.3.webp",
    precio: 12000
  },
  {
    id: "accesorios-3",
    categoria: "accesorios",
    titulo: "Cachas de espejos",
    descripcion: "Cachas de espejos originales para Fiat Cronos 1.3.",
    imagen: "img/Cacha-espejo-retrovisor-fiat-cronos-1.3.webp",
    precio: 7000
  },
  {
    id: "accesorios-4",
    categoria: "accesorios",
    titulo: "Red de carga",
    descripcion: "Red de carga original para Fiat Cronos 1.3.",
    imagen: "img/Red-elastica-fiat-cronos-1.3.webp",
    precio: 5000
  },
  {
    id: "accesorios-5",
    categoria: "accesorios",
    titulo: "Tuercas antirrobo",
    descripcion: "Tuercas antirrobo originales para Fiat Cronos 1.3.",
    imagen: "img/Tuercas-antirrobo-fiat-cronos-1.3.webp",
    precio: 10000
  },
  {
    id: "accesorios-6",
    categoria: "accesorios",
    titulo: "Chapon cubre cárter",
    descripcion: "Chapon cubre cárter original para Fiat Cronos 1.3.",
    imagen: "img/Chapon-cubrecarter-fiat-cronos-1.3.webp",
    precio: 120000
  }
];

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
    /* Usamos datos de respaldo para que se vean las cards igualmente */
    productos = PRODUCTOS_RESPALDO;
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

  const filtrados = productos.filter((p) => p.categoria === categoria);

  if (filtrados.length === 0) {
    contenedor.innerHTML =
      '<p style="text-align:center; color:#666;">No hay productos en esta categoría.</p>';
    return;
  }

  for (const producto of filtrados) {
    contenedor.appendChild(crearCard(producto));
  }
}

/* Muestra los primeros 3 productos de cada categoría (para el home) */
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