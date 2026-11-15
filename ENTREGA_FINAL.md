# TorqueX - Trabajo Integrador Final

**Curso:** Aplicaciones Web I  
**Alumno:** Rodrigo Bustamante  
**Proyecto:** Tienda online de repuestos y accesorios para vehículos  
**Repositorio:** https://github.com/rodrilonga/TorqueX.git  
**Sitio publicado:** https://rodrilonga.github.io/TorqueX/

---

## 1. Etapas del proyecto

El proyecto se hizo en 4 etapas, estas son:

| **Etapa 1** | Estructura general en HTML | Páginas de inicio, categorías, login y registro. Ya se movía de una a otra. |
| **Etapa 2** | Estilos e identidad | CSS propio con paleta cálida, fuentes de Google Fonts, navbar, formularios y cards con diseño. |
| **Etapa 3** | Estructura en JavaScript | Separación de datos y componentes en archivos `.js`. Navbar generada desde un array, cards como componente reutilizable, login/logout. |
| **Etapa 4** | Datos dinámicos con JSON + fetch + almacenamiento | El catálogo se carga desde `js/productos.json` con `fetch()`. Carrito en `localStorage`, tema en `localStorage`, compra por WhatsApp, registro y login. |

---

## 2. Tecnologias Implementadas

| **HTML5** | Las paginas | Base del sitio. |
| **CSS3** | Lo estetico | Paleta y diseno propio, responsive. Se uso Bootstrap para el navbar. |
| **Google Fonts** | Las letras | Roboto Slab para los titulos y Lato para el cuerpo. |
| **JavaScript** | La logica | `fetch()`, `sessionStorage`, `localStorage`, `toLocaleString` para precios y validaciones. |
| **JSON** | Los productos | `js/productos.json` con 24 productos. |
| **Bootstrap 5.3.3** | Solo el navbar | Para el plegable del movil. |
| **localStorage** | Carrito y tema | Persiste aunque cierren el navegador. |
| **WhatsApp** | El pedido | Arma el mensaje con productos, cantidades y total. |

---

## 3. Mejora significativa

**El carrito con almacenamiento persistente (`localStorage`)**

1. Elegir la cantidad con `+` y `-` antes de agregar.
2. Agregar productos desde el home o desde una categoria.
3. Que el carrito se guarde aunque cierren el navegador.
4. Ver el carrito con imagen, nombre, precio, cantidad, subtotal y total.
5. Eliminar productos o vaciar el carrito.
6. Comprar por WhatsApp con el detalle del pedido y el total.

---

## 4. Video explicativo del Proyecto

📹 **Link al video:** [Pendiente de grabacion]

---

## 5. Estructura del proyecto

| Carpeta / Archivo | Descripcion |
|-------------------|------------|
| `img/` | Imagenes de los productos. |
| `js/` | Scripts del sitio web (datos de productos, navbar, cards, carrito, tema, login). |
| `pages/` | Paginas del sitio web (login, registro, categorias, carrito). |
| `styles/` | Disenos, colores, estilos, etc. |
| `.gitignore` | Archivos que no se suben al repositorio. |
| `ENTREGA_FINAL.md` | Documento final de la entrega. |
| `README.md` | Documento de inicio / descripcion del proyecto. |
| `index.html` | Archivo principal del sitio. |

---

_Trabajo Integrador - Aplicaciones Web I_  
_Fecha: Noviembre 2026_
