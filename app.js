const express = require('express');
const app = express();

// Ruta principal
app.get('/', (req, res) => {
    res.send('Hola, servidor funcionando');
});

module.exports = app;