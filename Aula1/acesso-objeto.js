const cliente = {
    nome: "Andre",
    idade: 23,
    cpf: "23498234092",
    email: "andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`);

console.log(`Os 3 primeiros digitos do cpf são ${cliente.cpf.substring(0,3)}`)