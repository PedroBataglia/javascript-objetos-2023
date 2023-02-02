const livros = require("./livros.json");

function ordenarLivros(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] > b[propriedade]) {
            return 1;
        };
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        return 0;
    });

    return resultado;
}


const ordemCerta = ordenarLivros(livros, "Nome");

console.log(ordemCerta);