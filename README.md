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

### **Frontend**
- **HTML5**  
- **CSS3** (diseño responsivo con media queries)  
- **JavaScript** (ES6+)  
- **React** 
- **LocalStorage** (persistencia del carrito)  
- **Google Fonts** (Teko, Exo 2)

### **Backend**
- **Node.js + Express**  
- **Mongoose** (para conectarse a MongoDB Atlas)  
- **dotenv** (para manejar variables de entorno)  
- **CORS y Morgan** (para depuración y comunicación entre frontend/backend)

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

Listado de productos desde MongoDB

Detalle de productos

Carrito de compras con contador y almacenamiento en localStorage

Navegación entre Home, Productos y Contacto

Interfaz responsiva con menú
/*----------------------------------------------------------*/
## Notas

El backend ahora se conecta a una base de datos MongoDB Atlas mediante Mongoose.

Las variables sensibles (como la URI de conexión) deben guardarse en el archivo .env o configurarse en Vercel para producción.

La app mantiene el carrito usando localStorage, por lo que persiste tras recargar la página.
