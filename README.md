# Mueblería Hermanos Jota - E-commerce

**Proyecto final del curso Desarrollador FullStack del ITBA**  

Este proyecto es una tienda online de muebles que permite ver productos, manejar un carrito de compras, registrarse e iniciar sesion, y crear o editar productos.

![React](https://img.shields.io/badge/React-18.0.0-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38BDF8?logo=tailwindcss&logoColor=white)

## 👥 Integrantes

- Yerimen Cruz
- Alexis Cruz
- Emir Contreras
- Daniel Degarbo
- Javier Cordero

## Sitio desplagado y funcional

https://muebleria-hermanos-jota-react-expre.vercel.app/

## Estructura del proyecto

### /client

- **/public/imgs** (imagenes publicas, logos)
- **/src/api** (conexión al servidor)
- **/src/components** (componentes reutilizables)
- **/src/contexts** (logica de estados gloables (autenticacion, carrito))
- **/src/css** (estilos de los componentes/páginas)
- **/src/pages** (páginas)
- **/src/services** (lógica de comunicación con el servidor)
- **App.jsx** (ruteo)
- **index.jsx** (archivo principal de la app)

### /backend

- **/config** (configuración de base de datos y multer)
- **/public/uploads** (imagenes subidas desde el frontend)
- **/src/controllers** (controladores, logica de negocio)
- **/src/middlewares**
- **/src/models** (modelos de datos para la base de datos)
- **/src/routes** (ruteo y conexion con los controladores)
- **/srcapp.js** (archivo principal, configuracion general) 
- **/utils** (logica reutilizable)

## Tecnologías utilizadas

### **Frontend**
- **HTML5**
- **CSS3** (diseño responsivo con media queries)
- **JavaScript (ES6+)**
- **React**
- **TailwindCSS**
- **Google Fonts** (Teko, Exo 2)
- **Lucide** (iconos)

### **Backend**
- **Node.js + Express**
- **Mongoose** (conexión con MongoDB Atlas)
- **dotenv** (variables de entorno)
- **CORS** y **Morgan** (comunicación y logging)
- **bcrypt** (hashing de contraseñas)
- **JSON Web Token (JWT)** (autenticación)
- **Multer** (gestión de imágenes)

## Instalación y ejecución

1. Clonar el repositorio

```bash
git clone [<URL_DEL_REPO>](https://github.com/alexiscruz1403/muebleria-hermanos-jota-react-express.git)
cd muebleria-hermanos-jota-react-express
```

2. Instalar dependencias del backend

```bash
cd server
npm install
```

3. Configurar variables de entorno
   
```bash
MONGO_URI = URI_MONGO_DB_ATLAS
JWT_SECRET = CLAVE_SECRETA_JWT
```

4. Iniciar el servidor

```bash
npm run dev
```

5. Instalar dependencias del frontend

```bash
cd ../client
npm install
```

6. Configurar variables de entorno

```bash
REACT_APP_API_URL=http://localhost:4000/api
REACT_APP_SERVER_URL=http://localhost:4000
```

8. Iniciar la aplicación React

```bash
npm run dev
```

## Funcionalidades

Listado de productos desde MongoDB

Detalle de productos

Carrito de compras con contador y almacenamiento en localStorage

Autenticación de usuarios mediante registro e inicio de sesión

Creación, modificación y eliminación de productos disponibles para usuarios administradores

Navegación entre Home, Productos y Contacto

Interfaz responsiva con menú

## Notas

El backend ahora se conecta a una base de datos MongoDB Atlas mediante Mongoose.

Las variables sensibles (como la URI de conexión) deben guardarse en el archivo .env.

Utilizar estas credenciales para probar funcionalidades de administrador:
**Email:** admin@example.com
**Contraseña:** admin123
