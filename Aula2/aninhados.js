const cliente = {
    nome: "João",
    idade: 25,
    email: "joao@firma.com",
    telefone: ["23421348", "2398471209"],
};

cliente.endereco = {
    rua: "cleber machado de vilela",
    numero: 1335,
    apartamento: true,
    complemento: "ap 934",
};

cliente.endereco.numero = 1423;

console.log(cliente.endereco);