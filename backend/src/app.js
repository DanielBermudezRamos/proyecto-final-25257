import express from 'express';
import "dotenv/config"
import usersRouter from './routes/users.routes.js';
import productsRouter from './routes/products.routes.js';
import cors from 'cors';

const app = express();
// -- Permite recibir datos JSON en el body de las peticiones -
app.use(express.json()); 

// ---------- Middleware Personalizado (Logging) --------------
app.use((req, res, next) => {
    console.log(`Datos recibidos: ${req.method} ${req.url}`)
    next();
});

// app.use(express.static("public")); // serviría archivos estáticos
app.use(cors()); // Habilita CORS para todas las rutas
/**
 * Soporta rutas en inglés y español (/users y /usuarios)
 * Facilita la migración o soporte multi-idioma
 */
app.use(['/users','/usuarios'], usersRouter);
app.use(['/products','/productos'], productsRouter);

// ---------- Manejador de Rutas No Encontradas (404) ----------
app.use((req, res) => {
    res.status(404).json({error: "Ruta no encontrada."});
});
// -------------------------------------------------------------
const PORT = process.env.PORT || 3100;

console.log("-------------------------------------------------");
app.listen(PORT, () => console.log(`servidor activo en http://localhost:${PORT}`));