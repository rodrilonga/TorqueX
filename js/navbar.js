const links = [
  { label: "Inicio", href: "index.html" },
  { label: "Motor", href: "pages/motor.html" },
  { label: "Frenos", href: "pages/frenos.html" },
  { label: "Suspensión", href: "pages/suspension.html" },
  { label: "Accesorios", href: "pages/accesorios.html" },
];

function renderNavbar() {
  const contenedor = document.getElementById("navbar");
  if (!contenedor) return;

  const enPages = location.pathname.includes("/pages/");
  const prefijo = enPages ? "../" : "./";

  const linksHTML = links
    .map(
      (link) => `
    <li class="nav-item">
      <a class="nav-link" href="${prefijo}${link.href}">${link.label}</a>
    </li>`,
    )
    .join("");

  contenedor.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand logo-link" href="${prefijo}index.html">
          <img class="logo" src="${prefijo}img/logo-torquex.png" alt="Logo de TorqueX">
        </a>

        <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            ${linksHTML}
            <li class="nav-item">
              <button class="nav-link btn-logout" id="btnLogout" type="button">
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;

  const btnLogout = document.getElementById("btnLogout");

  function manejarLogout() {
    location.href = prefijo + "pages/login.html";
  }

  if (btnLogout) {
    btnLogout.addEventListener("click", manejarLogout);
  }
}

document.addEventListener("DOMContentLoaded", renderNavbar);