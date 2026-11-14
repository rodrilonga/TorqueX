/* ============================================================
   TORQUEX - script.js
   ------------------------------------------------------------
   Maneja:
   - Inicio de sesión (guarda usuario en sessionStorage)
   - Redirección de páginas protegidas (solo usuarios logueados)
   - Agregar productos al carrito (localStorage)
   - Carga de productos en la página principal
   ============================================================ */

/* --------------------------------------------------------
   Usuario logueado (sessionStorage)
   -------------------------------------------------------- */
const formLogin = document.getElementById("formLogin");

function manejarLogin() {
  const email = document.getElementById("email").value;

  /* Guardamos el usuario en sessionStorage */
  const usuario = {
    email: email,
    fechaLogin: new Date().toISOString(),
  };
  sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuario));

  /* Redirigimos a la página principal */
  location.href = "../index.html";
}

if (formLogin) {
  formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();
    manejarLogin();
  });
}

/* --------------------------------------------------------
   Verificar sesión en páginas protegidas
   --------------------------------------------------------
   Las páginas de categorías y el carrito requieren que
   el usuario esté logueado. Si no hay sesión, lo enviamos
   al login.
   -------------------------------------------------------- */
const rutaActual = location.pathname;
const esLogin = rutaActual.includes("login.html");
const esRegistro = rutaActual.includes("registro.html");
const esIndex = rutaActual.endsWith("index.html") || rutaActual === "/";

const usuario = JSON.parse(sessionStorage.getItem("usuarioLogueado"));

if (!usuario && !esLogin && !esRegistro) {
  location.href = "./pages/login.html";
}

/* --------------------------------------------------------
   Carrito de compras (localStorage)
   -------------------------------------------------------- */
function obtenerCarrito() {
  const carrito = localStorage.getItem("carrito");
  return carrito ? JSON.parse(carrito) : [];
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(productoId, cantidad) {
  const carrito = obtenerCarrito();
  const productoExistente = carrito.find((item) => item.id === productoId);

  if (productoExistente) {
    productoExistente.cantidad += cantidad;
  } else {
    carrito.push({
      id: productoId,
      cantidad: cantidad,
      fechaAgregado: new Date().toISOString(),
    });
  }

  guardarCarrito(carrito);
  alert("Producto agregado al carrito");
}

/* --------------------------------------------------------
   Botones "Agregar al carrito" de las cards
   --------------------------------------------------------
   Se delega el click porque las cards se inyectan dinámicamente.
   -------------------------------------------------------- */
document.addEventListener("click", function (evento) {
  if (evento.target.classList.contains("btn-agregar")) {
    const productoId = evento.target.getAttribute("data-id");
    const card = evento.target.closest(".card");
    const numeroCantidad = card.querySelector(".numero-cantidad");
    const cantidad = parseInt(numeroCantidad.textContent, 10) || 1;

    agregarAlCarrito(productoId, cantidad);
  }
});

/* --------------------------------------------------------
   Página principal (index.html)
   --------------------------------------------------------
   Si estamos en el home y hay productos cargados, mostramos
   3 productos por categoría.
   -------------------------------------------------------- */
const listaHome = document.getElementById("listaHome");

if (listaHome) {
  cargarProductos().then(() => {
    renderHomeProductos(listaHome);
  });
}

/* --------------------------------------------------------
   Páginas de categoría
   -------------------------------------------------------- */
const listaProductos = document.getElementById("listaProductos");

if (listaProductos) {
  const categoria = listaProductos.getAttribute("data-categoria");

  cargarProductos().then(() => {
    renderProductos(listaProductos, categoria);
  });
}