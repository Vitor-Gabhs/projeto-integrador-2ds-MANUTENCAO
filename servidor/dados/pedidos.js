let pedidos = [
    {
        id: 1,
        titulo: "Falha na internet",
        caracteristicas: "Queda total de conectividade.",
        descricao: "Dispositivo desconectado da rede local e sem acesso à internet externa.",
        local: "Sala 213",
        status: "Pendente",
        classificacao: null,
        motivo: null,
        responsavel: null
    },
    {
        id: 2,
        titulo: "Projetor piscando",
        caracteristicas: "Imagem oscilando e desligando sozinha.",
        descricao: "O projetor do teto liga, mas a imagem fica piscando em verde e desliga após 5 minutos.",
        local: "Auditório B",
        status: "Em Andamento",
        classificacao: "Hardware / Cabeamento",
        motivo: "Mau contato no cabo HDMI principal",
        responsavel: "Carlos Andrade"
    },
    {
        id: 3,
        titulo: "Ar-condicionado pingando",
        caracteristicas: "Vazamento de água na parede.",
        descricao: "A unidade interna do ar-condicionado está soltando água sobre as bancadas.",
        local: "Laboratório 04",
        status: "Pendente",
        classificacao: null,
        motivo: null,
        responsavel: null
    }
];

module.exports = pedidos;