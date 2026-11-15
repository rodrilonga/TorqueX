/* Aplica el tema guardado antes de dibujar la página */
const temaGuardado = localStorage.getItem("tema");

if (temaGuardado === "oscuro" || temaGuardado === "claro") {
  document.documentElement.setAttribute("data-theme", temaGuardado);
}
