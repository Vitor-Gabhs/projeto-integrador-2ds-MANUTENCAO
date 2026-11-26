import usuarios from "../../servidor/dados/usuarios.js";

const botao = document.getElementById('submit');

botao.addEventListener('click', validar);

function validar(event) {
    event.preventDefault()

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const usuario = usuarios.find(item => item.nome === username);
    if (!usuario) {
        return alert("Usuário não encontrado!");
    } else if (usuario.senha !== password) {    
        return alert("Senha incorreta!");
    } else {
        return console.log("true");
    };
};
