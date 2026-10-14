const formLogin = document.getElementById("formLogin");

function manejarLogin() {
  location.href = "../index.html";
}

if (formLogin) {
  formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();
    manejarLogin();
  });
}

const listaProductos = document.getElementById("listaProductos");

if (listaProductos) {
  const categoria = listaProductos.getAttribute("data-categoria");
  renderProductos(listaProductos, categoria);
}
