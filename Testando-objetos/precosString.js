const livros = require("./livrosComPreco.json");

function precosNovos(lista) {
    lista.map((livro) => {
        console.log(`O valor do livro ${livro["Nome"]} é de: R$${livro["Preco"]},00`)
    });

}

precosNovos(livros);

