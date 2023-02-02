const livros = require("./livros.json");

for (let i = 0; i < livros.length; i++) {
    if (typeof(livros[i]["Nome"]) === "object") {
        console.log(`Da saga -> ${livros[i]["Nome"][0]}: ${livros[i]["Nome"][1]}`)
    } else {
        console.log(`O nome do livro é ${livros[i]["Nome"]}`)
    }
}