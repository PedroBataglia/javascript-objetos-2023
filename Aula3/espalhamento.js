const cliente = {
    nome: "João",
    idade: 24,
    email: "João@frim.com",
    telefone: ["481203894", "29834759"],
};

cliente.endereco = [
    {
        rua: "R. Joseph Joestar",
        numero: 2345,
        apartamento: true,
        complemento: "ap 345",
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco[0],
};

console.log(encomenda);