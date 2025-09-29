import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas

// Manejo de errores

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
