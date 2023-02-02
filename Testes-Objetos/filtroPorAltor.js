const livros = require("./livros.json");

function filtrandoPorAutor(livros) {
    return livros.filter((livro) => livro.Autor == "JJK Talking");
}


const listaDETolking = filtrandoPorAutor(livros);

console.log(listaDETolking);