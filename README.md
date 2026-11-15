# TorqueX

**Alumno:** Rodrigo Bustamante  
**Curso:** Aplicaciones Web I  
**Repositorio:** https://github.com/rodrilonga/TorqueX  
**Sitio publicado:** https://rodrilonga.github.io/TorqueX/

## De qué trata

TorqueX es una web de compras de repuestos y accesorios para autos. por el momento cuanta con productos de un vehiculo en particular con sus diferentes partes, ya que seria muy extenso el proyecto con todas las marcas de autos y sus partes correspondientes.

## Las categorias

- Motor
- Frenos
- Suspensión
- Accesorios

## Lo que hace el sitio

- El catalogo se genera desde `js/productos.json` con 24 productos. En el home se muestran 3 por categoria (12 en total) y en cada categoria los 6 de esa.
- Las cards tienen imagen, nombre, descripcion, precio, cantidad y subtotal.
- Los botones `+` y `-` sirven para poner la cantidad antes de agregar.
- El carrito guarda todo en `localStorage`, asi que se mantiene aunque cierre el navegador.
- Se puede agregar, quitar, vacar o ver el total del carrito.
- Boton de comprar por WhatsApp con el detalle del pedido y el total.
- Tema claro/oscuro, guardado en `localStorage`.
- Registro validando los campos y el login precarga el mail. La contrasena no se guarda (simulacion).
- Avisos cuando agregas o cuando falta algo en el form, en vez de `alert()`.
- Navbar responsive con Bootstrap (plegable en movil) y contador de productos.

## Estructura

- `img/`: imagenes de los productos.
- `js/`: scripts del sitio web (datos, navbar, cards, carrito, tema, login).
- `pages/`: paginas del sitio web.
- `styles/`: disenos, colores, estilos, etc.
- `.gitignore`: archivos que no se suben al repositorio.
- `ENTREGA_FINAL.md`: documento final de la entrega.
- `README.md`: documento de inicio / descripcion del proyecto.
- `index.html`: archivo principal del sitio.
