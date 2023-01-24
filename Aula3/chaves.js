const cliente = {
    nome: "João",
    idade: 24,
    email: "João@frim.com",
    telefone: ["481203894", "29834759"],
};

// cliente.endereco = [
//     {
//         rua: "R. Joseph Joestar",
//         numero: 2345,
//         apartamento: true,
//         complemento: "ap 345",
//     },
// ];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("endereco")) {
    console.error("Erro! é necessário ter um enderço cadastrado.");
}; 