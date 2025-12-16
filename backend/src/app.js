import express from 'express';
import "dotenv/config"
import usersRouter from './routes/users.routes.js';
import productsRouter from './routes/products.routes.js';
import cors from 'cors';

const app = express();
app.use(express.json()); //configuración para recibir datos por body en express

// --------------
app.use((req, res, next) => {
    console.log(`Datos recibidos: ${req.method} ${req.url}`)
    next();
});

//app.use(express.static("public"));
app.use(cors());

app.use(['/users','/usuarios'], usersRouter);
app.use(['/products','/productos'], productsRouter);

// -------------------------------------------------------------
app.use((req, res) => {
    res.status(404).json({error: "Ruta no encontrada."});
});
// -------------------------------------------------------------
const PORT = process.env.PORT || 3100;

console.log("-------------------------------------------------");

app.listen(PORT, () => console.log(`servidor activo en http://localhost:${PORT}`));