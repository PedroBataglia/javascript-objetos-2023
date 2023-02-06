const alunos = require("./alunos.json");

function media(lista, indice) {
    let soma = 0;
    for (let i = 0; i < lista[indice]["notas"].length; i++ ) {
        soma += (lista[indice]["notas"][i])
    }
    const total = soma / lista[indice]["notas"].length; 
    lista[indice].media = total;
    return total
}

console.log(media(alunos, 1));

//console.log(alunos);

function aprovado(mediaAluno, media) {
    if (mediaAluno["media"] >= media) {
        mediaAluno.situacao = "aprovado"
    } else {
        mediaAluno.situacao = "reprovado"
    }
}

aprovado(alunos[1], 7);

console.log(alunos)