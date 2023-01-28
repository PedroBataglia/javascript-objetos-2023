const livros = require("./livros.json");

 for (let i = 0; i < livros.length; i++) {
     console.log(livros[i]);
 };

function ordenar(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        return 0;
    });
    return resultado;
};

const listaOrdenada = ordenar(livros, "nome");

console.log(listaOrdenada);