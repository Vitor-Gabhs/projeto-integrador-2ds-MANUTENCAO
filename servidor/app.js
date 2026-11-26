const express = require('express');
const cors = require('cors');
const app = express();

const rotasPedidos = require('./rotas/pedidos.js');
const rotasUsuarios = require('./rotas/usuarios.js');

app.use(cors());
app.use(express.json());

app.use(rotasPedidos);
app.use(rotasUsuarios);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
