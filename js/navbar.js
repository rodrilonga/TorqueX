/* Links */
const links = [
  { label: "Inicio", href: "index.html" },
  { label: "Motor", href: "pages/motor.html" },
  { label: "Frenos", href: "pages/frenos.html" },
  { label: "Suspensión", href: "pages/suspension.html" },
  { label: "Accesorios", href: "pages/accesorios.html" },
];

/* Carrito */
function contarProductos() {
  try {
    const carrito = JSON.parse(localStorage.getItem("carrito"));

    if (!Array.isArray(carrito)) {
      return 0;
    }

    let cantidad = 0;

    for (const item of carrito) {
      cantidad += Number(item.cantidad) || 0;
    }

    return cantidad;
  } catch (error) {
    return 0;
  }
}

/* Usuario */
function obtenerUsuario() {
  try {
    const usuario = JSON.parse(sessionStorage.getItem("usuarioLogueado"));

    return usuario && typeof usuario === "object" && !Array.isArray(usuario)
      ? usuario
      : null;
  } catch (error) {
    return null;
  }
}

/* Navbar */
function renderNavbar() {
  const contenedor = document.getElementById("navbar");
  if (!contenedor) return;

  const enPages = location.pathname.includes("/pages/");
  const prefijo = enPages ? "../" : "./";
  const paginaActual = location.pathname.split("/").pop() || "index.html";

  const linksHTML = links
    .map((link) => {
      const activo = link.href.split("/").pop() === paginaActual;

      return `
    <li class="nav-item">
      <a class="nav-link${activo ? " active" : ""}" href="${prefijo}${link.href}"${activo ? ' aria-current="page"' : ""}>
        ${link.label}
      </a>
    </li>`;
    })
    .join("");

  const usuario = obtenerUsuario();
  const esLoginPage = location.pathname.includes("login.html");
  const esRegistroPage = location.pathname.includes("registro.html");
  const enCarrito = paginaActual === "carrito.html";

  let authHTML = "";
  if (usuario) {
    authHTML = `
      <li class="nav-item">
        <span class="nav-link" id="usuarioEmail"></span>
      </li>
      <li class="nav-item">
        <button class="nav-link btn-logout" id="btnLogout" type="button">
          Cerrar sesión
        </button>
      </li>`;
  } else if (!esLoginPage && !esRegistroPage) {
    authHTML = `
      <li class="nav-item">
        <a class="nav-link" href="${prefijo}pages/login.html">
          Iniciar sesión
        </a>
      </li>`;
  }

  contenedor.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand logo-link" href="${prefijo}index.html">
          <img class="logo" src="${prefijo}img/logo-torquex.png"
               alt="Logo de TorqueX" width="180" height="90">
        </a>

        <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-label="Abrir menú">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            ${linksHTML}
            <li class="nav-item">
              <a class="nav-link${enCarrito ? " active" : ""}" id="enlaceCarrito"
                 href="${prefijo}pages/carrito.html"
                 aria-label="Mi carrito"${enCarrito ? ' aria-current="page"' : ""}>
                🛒 Mi carrito
                <span class="contador-carrito" id="contadorCarrito" hidden></span>
              </a>
            </li>
            <li class="nav-item">
              <button class="nav-link btn-tema" id="btnTema" type="button">
                🌙
              </button>
            </li>
            ${authHTML}
          </ul>
        </div>
      </div>
    </nav>`;

  const btnLogout = document.getElementById("btnLogout");
  const btnTema = document.getElementById("btnTema");
  const contadorCarrito = document.getElementById("contadorCarrito");
  const enlaceCarrito = document.getElementById("enlaceCarrito");
  const usuarioEmail = document.getElementById("usuarioEmail");

  if (usuarioEmail && usuario) {
    usuarioEmail.textContent = usuario.email || "";
  }

  /* Logout */
  function manejarLogout() {
    sessionStorage.removeItem("usuarioLogueado");
    location.href = prefijo + "pages/login.html";
  }

  if (btnLogout) {
    btnLogout.addEventListener("click", manejarLogout);
  }

  /* Tema */
  function actualizarBotonTema() {
    const temaOscuro =
      document.documentElement.getAttribute("data-theme") === "oscuro";

    btnTema.textContent = temaOscuro ? "☀️" : "🌙";
    const texto = temaOscuro ? "Activar tema claro" : "Activar tema oscuro";

    btnTema.setAttribute("aria-label", texto);
    btnTema.setAttribute("title", texto);
    btnTema.setAttribute("aria-pressed", temaOscuro ? "true" : "false");
  }

  function cambiarTema() {
    const temaOscuro =
      document.documentElement.getAttribute("data-theme") === "oscuro";
    const nuevoTema = temaOscuro ? "claro" : "oscuro";

    document.documentElement.setAttribute("data-theme", nuevoTema);
    localStorage.setItem("tema", nuevoTema);
    actualizarBotonTema();
  }

  if (btnTema) {
    actualizarBotonTema();
    btnTema.addEventListener("click", cambiarTema);
  }

  /* Contador */
  function actualizarContadorCarrito() {
    if (!contadorCarrito || !enlaceCarrito) {
      return;
    }

    const cantidad = contarProductos();

    const texto = cantidad === 1 ? "producto" : "productos";

    contadorCarrito.textContent = cantidad;
    contadorCarrito.hidden = cantidad === 0;
    enlaceCarrito.setAttribute(
      "aria-label",
      "Mi carrito, " + cantidad + " " + texto,
    );
  }

  actualizarContadorCarrito();
  document.addEventListener("carritoActualizado", actualizarContadorCarrito);

  window.addEventListener("storage", function (evento) {
    if (evento.key === "carrito") {
      actualizarContadorCarrito();
    }
  });
}

document.addEventListener("DOMContentLoaded", renderNavbar);
