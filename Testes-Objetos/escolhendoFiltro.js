const livros = require("./livros.json");

function filtrandoLivros(lista, parametro, tipoDeFiltro) {
    return lista.filter((livro) => livro[parametro] === tipoDeFiltro);
}

const listaFiltrada = filtrandoLivros(livros, "Ano", "2011");

console.log(listaFiltrada);