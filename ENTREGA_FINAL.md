# TorqueX - Trabajo Integrador Final

**Curso:** Aplicaciones Web I  
**Alumno:** Rodrigo Bustamante  
**Proyecto:** Tienda online de repuestos y accesorios para vehículos  
**Repositorio:** https://github.com/rodrilonga/TorqueX.git  
**Publicado en:** https://rodrilonga.github.io/TorqueX/ (GitHub Pages)

---

## 1. Roadmap de Desarrollo

El proyecto se desarrolló en 4 etapas, siguiendo las consignas del trabajo práctico:

| Etapa | Objetivo | Logros |
|-------|----------|--------|
| **Etapa 1** | Estructura general en HTML | Páginas de inicio, categorías, login y registro. Navegación entre secciones. Identidad visual básica. |
| **Etapa 2** | Estilos e identidad | CSS propio con paleta de colores (rojo #e63946, gris oscuro #1f1f1f, blanco). Navbar estilizado, formularios de login y registro, cards de producto con diseño. |
| **Etapa 3** | Estructura en JavaScript | Separación de datos y componentes en archivos `.js`. Navbar generado dinámicamente desde array de datos. Cards de producto como componente reutilizable con cantidad y subtotal. Login redirige al inicio, logout redirige al login. Rutas relativas (`./`, `../`). |
| **Etapa 4** (esta entrega) | Datos dinámicos con JSON + fetch + almacenamiento | `productos.json` cargado mediante `fetch()`. Usuarios guardados en `sessionStorage`. Carrito guardado en `localStorage`. Página de carrito con listado, eliminación y total. Home con productos destacados (3 por categoría). Bootstrap 5 para navbar responsivo con hamburguesa en móviles. |

---

## 2. Tecnologías Utilizadas

| Tecnología | Uso en el proyecto | Justificación |
|------------|-------------------|---------------|
| **HTML5** | Estructura de todas las páginas | Lenguaje base para el marcado semántico del sitio. |
| **CSS3** | Diseño y presentación | Paleta de colores personalizada, diseño responsive, estilos de cards, navbar y formularios. No se usó ningún framework CSS adicional salvo Bootstrap para el navbar. |
| **JavaScript (ES6+)** | Lógica de aplicación | `fetch()` para cargar JSON, `sessionStorage` y `localStorage` para persistencia, manejo del DOM con `addEventListener`, componentes reutilizables (`crearCard`, `renderNavbar`). |
| **JSON** | Fuente de datos de productos | Archivo `productos.json` con la estructura de productos (id, categoría, título, descripción, imagen, precio). Cargado dinámicamente mediante `fetch()`. |
| **Bootstrap 5.3.3** | Navbar responsivo | Se utilizó únicamente para las clases del navbar (`navbar-expand-lg`, `navbar-toggler`, `collapse`) y así obtener el menú hamburguesa automático en pantallas pequeñas. Se incluyó vía CDN (CSS y JS Bundle). |
| **sessionStorage** | Sesión de usuario | Guarda los datos del usuario logueado (email y fecha de inicio de sesión) mientras dura la pestaña del navegador. |
| **localStorage** | Carrito de compras | Guarda los productos seleccionados por el usuario con su cantidad, persistente incluso al cerrar el navegador. |

---

## 3. Mejora Significativa

**Carrito de compras con almacenamiento persistente (`localStorage`)**

Esta es la mejora más importante respecto a las entregas parciales. Permite al usuario:

1. **Agregar productos al carrito** desde cualquier página de categoría o del home.
2. **Conservar el carrito** incluso si cierra el navegador o apaga la computadora (gracias a `localStorage`).
3. **Ver el carrito** en una página dedicada (`pages/carrito.html`) con listado de productos, cantidades, precios unitarios y subtotal.
4. **Eliminar productos individuales** del carrito.
5. **Vaciar el carrito completo** si lo desea.
6. **Ver el total de la compra** antes de finalizar.

Esta mejora aporta funcionalidad real de ecommerce al sitio, transformándolo de un catálogo estático a una tienda con carrito de compras operativo.

---

## 4. Publicación

El proyecto está publicado públicamente en **GitHub Pages**:

🔗 **https://rodrilonga.github.io/TorqueX/**

Para publicarlo se configuró GitHub Pages en la configuración del repositorio (`Settings` → `Pages`), seleccionando la rama `main` como origen. GitHub Pages sirve los archivos estáticos (HTML, CSS, JS, imágenes) directamente desde el repositorio.

---

## 5. Video Explicativo

📹 **Link al video:** [Por completar]  
*El video debe mostrarse subido a YouTube, Google Drive o Loom, con recorrido por las distintas páginas del sitio y narración en voz en off explicando el funcionamiento.*

**Contenido sugerido del video:**
1. Página de inicio y navegación por categorías.
2. Proceso de inicio de sesión y redirección al home.
3. Visualización de productos destacados y por categoría.
4. Agregar productos al carrito (modificar cantidad y agregar).
5. Ver carrito, eliminar productos y ver total.
6. Cerrar sesión y volver al login.

---

## 6. Cómo probar el proyecto localmente

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/rodrilonga/TorqueX.git
   ```
2. Abrir `index.html` en el navegador (se recomienda usar "Live Server" de VS Code o un servidor local porque el `fetch()` del JSON no funciona al abrir el archivo directamente con `file://`).
3. Iniciar sesión con cualquier correo en `pages/login.html`.
4. Navegar por categorías, agregar productos al carrito y visitar el carrito.

---

## 7. Estructura del proyecto

```
TorqueX/
├── index.html                  # Página principal (home con productos destacados)
├── img/                        # Imágenes de productos y logo
├── js/
│   ├── productos.json          # Datos de productos (fuente JSON)
│   ├── cards.js                # Componente card + fetch de productos
│   ├── navbar.js               # Componente navbar generado dinámicamente
│   ├── script.js               # Login, sessionStorage, carrito localStorage
│   └── carrito.js              # Lógica de la página del carrito
├── pages/
│   ├── login.html              # Página de inicio de sesión
│   ├── registro.html           # Página de registro
│   ├── motor.html              # Categoría Motor
│   ├── frenos.html             # Categoría Frenos
│   ├── suspension.html         # Categoría Suspensión
│   ├── accesorios.html         # Categoría Accesorios
│   └── carrito.html            # Página del carrito de compras
├── styles/
│   └── style.css               # Estilos CSS personalizados
└── README.md
```

---

*Entrega final - Trabajo Integrador - Aplicaciones Web I*  
*Fecha: Octubre 2026*