const livros = require("./livros.json");

function filtrandoPorAutor(livros, autor) {
    return livros.filter((livro) => livro.Autor == autor);
}


const listaDETolking = filtrandoPorAutor(livros, "Patrick Rothfuss");

console.log(listaDETolking);