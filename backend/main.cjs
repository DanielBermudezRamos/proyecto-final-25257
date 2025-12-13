const http = require('http');

const server = http.createServer((req, res) => {
    console.log('--- request ---');
    console.log(req);
    console.log('--- response ---');
    console.log(res);
});

const PORT = 3001;

server.listen(PORT, () => console.log('escuchando puerto ' + PORT))