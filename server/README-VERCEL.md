# Configuración para despliegue en Vercel (Serverless)

## Estructura del proyecto

El proyecto ahora está configurado para funcionar como una función serverless en Vercel:

```
server/
├── api/
│   └── index.js          # Punto de entrada para la función serverless
├── src/
│   ├── app.js           # App original (para desarrollo local)
│   ├── controllers/
│   ├── data/
│   ├── middlewares/
│   └── routes/
├── package.json
└── vercel.json          # Configuración de Vercel
```

## Configuración realizada

### 1. vercel.json
- Configurado para usar funciones serverless
- Redirección de todas las rutas `/api/*` a la función principal

### 2. api/index.js
- Punto de entrada para la función serverless
- Configuración de CORS específica para producción
- Manejo de errores optimizado

### 3. package.json
- Agregado `main` apuntando a `api/index.js`
- Especificada versión de Node.js (>=18.x)
- Scripts de build para Vercel

## Despliegue en Vercel

### Opción 1: Usando la CLI de Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desde el directorio server/
cd server
vercel

# Para despliegues posteriores
vercel --prod
```

### Opción 2: Conectar repositorio GitHub
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu cuenta de GitHub
3. Importa el repositorio
4. Configura el directorio root como `server/`
5. Deploy

## Variables de entorno

Si necesitas variables de entorno, créalas en:
- Vercel Dashboard → Settings → Environment Variables
- O usando la CLI: `vercel env add`

## Endpoints disponibles

Después del despliegue, tus endpoints estarán disponibles en:
- `https://tu-proyecto.vercel.app/api` (health check)
- `https://tu-proyecto.vercel.app/api/productos` (todos los productos)
- `https://tu-proyecto.vercel.app/api/productos/destacados` (productos destacados)
- `https://tu-proyecto.vercel.app/api/productos/:id` (producto por ID)

## Desarrollo local

Para desarrollo local, puedes seguir usando:
```bash
npm run dev
```

Esto ejecutará el servidor Express tradicional en `src/app.js`.

## Notas importantes

1. **CORS**: Actualiza la configuración de CORS en `api/index.js` con tu dominio frontend real
2. **Logs**: Los logs funcionan normalmente en Vercel
3. **Cold starts**: Las funciones serverless pueden tener cold starts, especialmente si no reciben tráfico por un tiempo
4. **Límites**: Vercel tiene límites de tiempo de ejecución (10s para hobby plan, 60s para pro)

## Troubleshooting

Si tienes problemas:
1. Verifica que el directorio `server/` sea el root del proyecto en Vercel
2. Revisa los logs en Vercel Dashboard → Functions → View Function Logs
3. Asegúrate de que todas las dependencias estén en `dependencies` (no `devDependencies`)