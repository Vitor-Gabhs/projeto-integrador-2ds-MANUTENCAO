const express = require('express');
const app = express();

app.use (express.json())

app.get ('/pedidos', (req, res) => {
    res.json(pedidos)
});

app.get ('/pedidos/:id', (req, res) => {
    const id = Number(req.params.id);
    const pedidoEncontrado = pedidos.find(item => item.id === id);
    if (!pedidoEncontrado) {
        return res.status(404).json({ mensagem:'Pedido não encontrado.' })
    }

    res.json(pedidoEncontrado)
});

app.post ('/pedidos', (req, res) => {
    const novoPedido = {
        id: pedidos.length + 1,
        titulo: req.body.titulo,
        caracteristicas: req.body.caracteristicas,
        descricao: req.body.descricao,
        local: req.body.local,
        status: "pendente",
        classificacao: null,
        motivo: null,
        responsavel: null
    };

    pedidos.push(novoPedido);
    res.status(201).json(novoPedido);
});

app.put ('/pedidos/:id', (req, res) => {
    const id = Number(req.params.id);
    const pedidoEncontrado = pedidos.find(item => item.id === id);

    if (!pedidoEncontrado) {
        return res.status(404).json({ mensagem: 'Pedido não encontrado' });
    }

    pedidoEncontrado.titulo = req.body.titulo;
    pedidoEncontrado.caracteristicas = req.body.caracteristicas;
    pedidoEncontrado.descricao = req.body.descricao;
    pedidoEncontrado.local = req.body.local;
    res.json(pedidoEncontrado);
});

app.delete('/pedidos/:id', (req, res) => {
    const id = Number(req.params.id);
    pedidos = pedidos.filter(item => item.id !== id);
    res.json({ mensagem: 'Pedido removido.'})
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});