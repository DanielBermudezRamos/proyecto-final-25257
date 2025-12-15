import express from 'express';
import usersRouter from './routes/users.routes.js';
import cors from 'cors';

const app = express();
app.use(express.json()); //configuración para recibir datos por body en express

// --------------
const productos = [
    {"id": 1, "nombre":"mango", "cantidad": 10},
    {"id": 2, "nombre":"tamarindo", "cantidad": 20},
    {"id": 3, "nombre":"guanábana", "cantidad": 30}
];
// --------------
app.use((req, res, next) => {
    console.log(`Datos recibidos: ${req.method} ${req.url}`)
    next();
});

app.use(express.static("public"));
app.use(cors());

app.use('/users', usersRouter);
app.use('/usuarios', usersRouter);

app.get("products/:id", (req, res) => {
    const {id} = req.params;
    const product = productos.find(item => item.id == id);
    
    if (!product) {
        res.status(404).json({error: `no estiste producto con id ${id}`});
    }

    res.json(product);
})
app.post("/products", (req, res) => {
    const {nombre, precio, cantidad} = req.body;
    const newProduct = {
        id:product.length + 1,
        nombre,
        precio,
        cantidad
    }
    productos.push(newProduct);
    res.status(201).json(newProduct);
})
// -------------------------------------------------------------
app.use((req, res) => {
    res.status(404).json({error: "Ruta no encontrada."});
});
// -------------------------------------------------------------
const PORT = 3112;

console.log("-------------------------------------------------");

app.listen(PORT, () => console.log(`servidor activo en http://localhost:${PORT}`));