const cliente = {
    nome: "Pedro",
    idade: 19,
    cpf: "12345421",
    email: "pedro@gmail.com"
}; 

console.log(
    `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`
);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem  o valor de ${cliente[chave]}`)
});