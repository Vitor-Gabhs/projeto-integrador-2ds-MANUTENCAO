const express = require('express');
const rotas = express.Router();

rotas.get('./usuarios', (req, res) => {
    res.json(usuarios);
});

module.exports = rotas;