const livros = require("./livros.json");

//  for (let i = 0; i < livros.length; i++) {
//      console.log(livros[i]);
//  };

function ordenar(lista, propriedade, ordem = "crescente") {
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] > b[propriedade]) {
            return 1;
        };
        if (a[propriedade] < b[propriedade]) {
            return -1;
        };
        return 0;
    });
    if(ordem !== "crescente") {
        resultado.reverse();
    }
    return resultado;
};

const listaOrdenada = ordenar(livros, "ano", "reversa");

console.log(listaOrdenada);