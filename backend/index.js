import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("hola")
})

const PORT = 3112

console.log("-------------------------------------------------")

app.listen(PORT, () => console.log('escuchando puerto ' + PORT));