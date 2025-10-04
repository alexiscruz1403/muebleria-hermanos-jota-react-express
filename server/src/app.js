import express from 'express';
import cors from 'cors';
import { logger } from './middlewares/logger.js';

import productsRouter from './routes/products.routes.js';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(logger);

// Rutas
app.use('/api/productos', productsRouter);

// 404 error
app.use((req, res) => {
  res.status(404).json({ message: 'Recurso no encontrado' });
});

// // Manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
