const livros = require("./livrosComPreco.json");

// O .map() não serve para ordenar, mas sim para mapear uma entidade para outra.
function filtrandoLivros(lista, filtro, parametro) {
    const listaFiltrada = lista.map((livro) => {
        if (livro[parametro] == filtro) {
            return livro;
        } else {
            
        }
    })
    return listaFiltrada
}

const livrosComFiltro = filtrandoLivros(livros, "J.R.R. Tolkien", "Autor");

console.log(livrosComFiltro);