const clientes = require("./clientes.json");

function ordemInversa(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] > b[propriedade]) {
            return -1;
        };
        if (a[propriedade] < b[propriedade]) {
            return 1;
        };
        return 0;
    });

    return resultado;
}

const listaInversa = ordemInversa(clientes, "nome");

console.log(listaInversa);