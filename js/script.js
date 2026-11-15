/* Mensajes */
let tiempoToast;

function mostrarToast(mensaje, tipo) {
  let toast = document.getElementById("toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }

  clearTimeout(tiempoToast);
  toast.className = tipo === "error" ? "mensaje-toast error" : "mensaje-toast";
  toast.textContent = mensaje;
  toast.classList.add("visible");

  tiempoToast = setTimeout(function () {
    toast.classList.remove("visible");
  }, 2000);
}

/* Login */
const formLogin = document.getElementById("formLogin");

function manejarLogin() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    mostrarToast("Completá el correo y la contraseña.", "error");
    return;
  }

  /* Guardar usuario */
  const usuario = {
    email: email,
    fechaLogin: new Date().toISOString(),
  };
  sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuario));

  /* Volver al inicio */
  const prefijo = location.pathname.includes("/pages/") ? "../" : "./";
  location.href = prefijo + "index.html";
}

if (formLogin) {
  const emailInput = document.getElementById("email");
  const registrado = localStorage.getItem("usuarioRegistrado");

  /* Completar el correo del registro */
  if (emailInput && registrado) {
    try {
      const datos = JSON.parse(registrado);

      if (datos.email) {
        emailInput.value = datos.email;
      }
    } catch (error) {
      localStorage.removeItem("usuarioRegistrado");
    }
  }

  formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();
    manejarLogin();
  });
}

/* Registro */
const formRegistro = document.getElementById("formRegistro");

function manejarRegistro(evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;

  if (!nombre || !apellido || !email || !fechaNacimiento) {
    mostrarToast("Completá todos los campos.", "error");
    return;
  }

  /* Guardar solo datos básicos, sin contraseña */
  const usuario = {
    nombre: nombre,
    apellido: apellido,
    email: email,
  };
  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

  mostrarToast("Registro exitoso. Ahora iniciá sesión.");
  setTimeout(function () {
    location.href = "./login.html";
  }, 1200);
}

if (formRegistro) {
  formRegistro.addEventListener("submit", manejarRegistro);
}

/* Carrito */
function obtenerCarrito() {
  try {
    const carrito = JSON.parse(localStorage.getItem("carrito"));

    return Array.isArray(carrito) ? carrito : [];
  } catch (error) {
    return [];
  }
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  document.dispatchEvent(new Event("carritoActualizado"));
}

function agregarAlCarrito(productoId, cantidad) {
  const carrito = obtenerCarrito();
  let encontrado = false;

  for (const item of carrito) {
    if (item.id === productoId) {
      item.cantidad = item.cantidad + cantidad;
      encontrado = true;
    }
  }

  if (!encontrado) {
    carrito.push({
      id: productoId,
      cantidad: cantidad,
      fechaAgregado: new Date().toISOString(),
    });
  }

  guardarCarrito(carrito);
  mostrarToast("Producto agregado al carrito");
}

/* Botones agregar */
document.addEventListener("click", function (evento) {
  if (evento.target.classList.contains("btn-agregar")) {
    const productoId = evento.target.getAttribute("data-id");
    const card = evento.target.closest(".producto-card");

    if (!card) {
      return;
    }

    const numeroCantidad = card.querySelector(".numero-cantidad");
    const cantidad = parseInt(numeroCantidad.textContent, 10) || 1;

    agregarAlCarrito(productoId, cantidad);
  }
});

/* Home */
const listaHome = document.getElementById("listaHome");

if (listaHome) {
  productosListos.then(function () {
    renderHomeProductos(listaHome);
  });
}

/* Categorías */
const listaProductos = document.getElementById("listaProductos");

if (listaProductos) {
  const categoria = listaProductos.getAttribute("data-categoria");

  productosListos.then(function () {
    renderProductos(listaProductos, categoria);
  });
}
