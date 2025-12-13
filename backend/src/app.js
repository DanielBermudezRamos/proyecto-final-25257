import express from 'express';

const app = express();

const productos = [
    {id:1,nombre:"apple", precion: 10.0,cantidad:100},
    {id:2,nombre:"green apple", precion: 20.0,cantidad:200},
    {id:3,nombre:"orange", precion: 30.0,cantidad:300},

];

app.get('/', (req, res) => {
    res.send("hola")
});

app.get('/products', (req, res) => {
    res.json(productos)
});

app.get('/products/2', (req, res) => {
    const product = productos.find(item => item.id == 2)
});

const PORT = 3112;

console.log("-------------------------------------------------")

app.listen(PORT, () => console.log('escuchando puerto ' + PORT));