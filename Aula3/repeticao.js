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

for (let chave in cliente) {
    let tipo = typeof cliente[chave]; 
    if (tipo !== "object" && tipo !== "fucntion") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    };
};