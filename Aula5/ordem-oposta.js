const clientes = require("./clientes.json");

function ordemInversa(lista, propriedade, ordem = "reverso") {
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] > b[propriedade]) {
            return -1;
        };
        if (a[propriedade] < b[propriedade]) {
            return 1;
        };
        return 0;
    });

    if(ordem !== "reverso") {
        resultado.reverse();
    }

    return resultado;
}

const listaInversa = ordemInversa(clientes, "nome");

console.log(listaInversa);