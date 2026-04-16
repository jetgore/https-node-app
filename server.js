const https = require('https');
const fs = require('fs');
const app = require('./app');

// Leer certificados
const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

// Crear servidor HTTPS
https.createServer(options, app).listen(8080, () => {
    console.log('Servidor HTTPS corriendo en https://localhost:8080');
});