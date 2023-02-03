const livros = require("./livros.json");
let armazenar = "";


//  for (let i = 0; i < livros.length; i++) {
//     if (typeof(livros[i].Nome) === "object") {
//         console.log(livros[i]["Nome"])
//     } else {
//         continue;
//     }
//  }

function livrosObjetos (lista) {
    return lista.filter((livro) => (typeof(livro.Nome) === "object"))

}

const listaDeTitulos = livrosObjetos(livros);


//console.log(listaDeTitulos);

for (let i = 0; i < listaDeTitulos.length; i++) {
    console.log(`Da saga => ${listaDeTitulos[i]["Nome"][0]}:   ${listaDeTitulos[i]["Nome"][1]}`)
}