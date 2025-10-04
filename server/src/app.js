import express from 'express';
import cors from 'cors';

import productsRouter from './routes/products.routes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/productos', productsRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Recurso no encontrado' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
