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
    const livrosComDoisTitulos = lista.filter((livro) => {
        if (typeof(livro.Nome) === "object") {
            return livro;
        } else {
            
        }
    });
    return livrosComDoisTitulos;
}

const listaDeTitulos = livrosObjetos(livros);


//console.log(listaDeTitulos);

for (let i = 0; i < listaDeTitulos.length; i++) {
    console.log(`Da saga => ${listaDeTitulos[i]["Nome"][0]}:   ${listaDeTitulos[i]["Nome"][1]}`)
}