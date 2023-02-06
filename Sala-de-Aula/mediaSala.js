const alunos = require("./alunos.json");

function media(lista, indice) {
    let soma = 0;
    for (let i = 0; i < lista[indice]["notas"]. length; i++) {
        soma += lista[indice]["notas"][i]
    }
    const total = soma / lista[indice]["notas"].length;
    lista[indice].media = total;
}
for (aluno in alunos) {
    media(alunos, aluno);
}

console.log(alunos);