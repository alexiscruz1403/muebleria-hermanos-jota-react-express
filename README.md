# Mueblería Hermanos Jota - E-commerce

**Proyecto de Frontend con React y Backend con Node.js/Express**  

Este proyecto es una tienda online de muebles que permite ver productos, detalles y manejar un carrito de compras (con localStorage). Se trabajó en equipo durante los Sprints 3 y 4 del curso.

/*----------------------------------------------------------*/
## 👥 Integrantes

- Yerimen Cruz
- Alexis Cruz
- Emir Contreras
- Daniel Degarbo
- Javier Cordero

/*----------------------------------------------------------*/
## Estructura del proyecto

/client # Frontend en React
    /public
        /imgs
    /src
        /components
        /css
        /pages
        /services 
        App.jsx
        index.jsx 


/backend # Backend con Node.js + Express
    /controllers
    /data
    /middlewares
    /routes
    app.js

/*----------------------------------------------------------*/

## Tecnologías utilizadas

- **HTML5**: Estructura de las páginas.
- **CSS3**: Estilos y diseño responsivo con media queries.
- **JavaScript (ES6+)**: Lógica de búsqueda, render dinámico del catálogo, carrito de compras y menú responsive.
- **React**: Arquitectura de componentes, estado, props y eventos.
- **Node.js + Express**: Backend para servir datos de productos.
- **LocalStorage**: Persistencia del carrito en el navegador.
- **Google Fonts** (Teko, Exo 2): Tipografías.

/*----------------------------------------------------------*/
## Instalación y ejecución

1. Clonar el repositorio
/ ```bash
git clone <URL_DEL_REPO>
cd muebleria-hermanos-jota-react-express

2. Instalar dependencias del backend

cd backend
npm install

3. Iniciar el servidor backend

npm run dev
**Por defecto corre en http://localhost:4000**

4. Instalar dependencias del frontend

cd ../client
npm install

5. Iniciar la aplicación React

npm start
**Por defecto corre en http://localhost:3000**

/*----------------------------------------------------------*/

## Funcionalidades

Listado de productos

Detalle de productos

Carrito de compras (contador y almacenamiento en localStorage)

Navegación entre Home, Productos y Contacto

Interfaz responsiva con menú

/*----------------------------------------------------------*/
## Notas

Actualmente la aplicación no usa base de datos, los productos se cargan desde un archivo local (productos.js).

La navegación entre páginas se hace mediante un sistema propio de navigate y renderizado condicional.

El carrito se guarda en localStorage, por lo que persiste al recargar la página.
