const alunos = require("./alunos.json");



function encontrar(lista, chave, valor) {
    const encontrado = lista.find((item) => item[chave].includes(valor))

    return encontrado
}

const alunoEncontrado = encontrar(alunos, "nome", "Maria Vitória");

console.log(alunoEncontrado);
