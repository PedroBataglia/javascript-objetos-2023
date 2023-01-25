const dados = require("./cliente.json");
const lutador = require("./lutador.json")

console.log(lutador);
console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados)

console.log(clienteEmString);
console.log(clienteEmString.email);
console.log(typeof clienteEmString);

const objCliente = JSON.parse(clienteEmString); 

console.log(objCliente);