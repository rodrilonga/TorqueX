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
    <nav class="navbar">
      <a class="logo-link" href="${prefijo}index.html">
        <img class="logo" src="${prefijo}img/logo-torquex.png" alt="Logo de TorqueX">
      </a>

      <ul class="nav-menu">
        ${linksHTML}
        <li class="nav-item">
          <button class="btn-logout" id="btnLogout" type="button">
            Cerrar sesión
          </button>
        </li>
      </ul>
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
