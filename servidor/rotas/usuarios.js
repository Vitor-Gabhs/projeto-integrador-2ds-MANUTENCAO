const express = require('express');
const app = express.Router();
let usuarios = require('../dados/usuarios')

app.use (express.json());


app.get ('/usuarios', (req, res) => {
    res.json(usuarios)
});

app.get ('/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);
    const usuariosEncontrado = usuarios.find(item => item.id === id);
    if (!usuariosEncontrado) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }  ;
    res.json(usuariosEncontrado);
});

app.post ('/usuarios', (req, res) => {
    const novoUsuarios ={
        id: usuarios.length + 1,
        nome: req.body.nome,
        email: req.body.email,
        perfil: req.body.perfil
    };
    usuarios.push(novoUsuarios);
    res.status(201).json(novoUsuarios);
});

app.put('/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);
    const usuarioEncontrado = usuarios.find(item => item.id === id);
    
    if (!usuarioEncontrado) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    };

    usuarioEncontrado.nome = req.body.nome;
    usuarioEncontrado.email = req.body.email;
    
    res.json(usuarioEncontrado);
});

app.delete('/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);
    const usuariosEncontrado = usuarios.find(item => item.id === id);

    if (!usuariosEncontrado) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' })
    };

    usuarios = usuarios.filter(item => item.id !== id);
    res.json({ mensagem: 'Usuário removido.' });
});

module.exports = app;