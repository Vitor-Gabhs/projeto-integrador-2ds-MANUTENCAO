const express = require('express');
const app = express();

app.use (express.json());

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000.")
});

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
    const novousuarios ={
        id: usuarios.length + 1,
        nome: req.body.nome,
        email: req.body.email,
        perfil: req.body.perfil
    };
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuarios);
});

app.put('/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);
    const usuariosEncontrado = usuarios.find(item => item.id === id);
    
    if (!usuariosEncontrado) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    };

    usuariosEncontrado.nome = req.body.nome;
    usuariosEncontrado.email = req.body.email;

});

app.delete('/usuario/:id', (req, res) => {
    const id = Number(req.params.id);
    usuarios = usuarios.filter(item => item.id !== id);
    res.json({ mensagem: 'Usuário removido.' });
});