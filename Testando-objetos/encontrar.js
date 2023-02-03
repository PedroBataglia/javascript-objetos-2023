const livros = require("./livrosComPreco.json");

function encontraLivro(lista, chave, valor) {
    return lista.find((livro) => livro[chave].includes(valor))
}

const buscaPeryJonhson = encontraLivro(livros, "Nome", "Hobbit");

console.log(buscaPeryJonhson);