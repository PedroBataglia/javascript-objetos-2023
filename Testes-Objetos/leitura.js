const livros = require("./livros.json");

//  for (let i = 0; i < livros.length; i++) {
//      console.log(livros[i]);
//  };

function livroAutor(lista) {
    for (let livro in lista) {
        console.log(...lista[livro]["Nome"]);
        console.log(lista[livro]["Autor"]);
    }
}

livroAutor(livros);