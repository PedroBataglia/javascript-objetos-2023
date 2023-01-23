const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
};
pessoa.nome = "Luma Silva";

console.log(pessoa.nome)

pessoa.telefone = "12893841234";

console.log(pessoa.telefone);

const novaPessoa = {
    nome: "Pedro",
}

pessoa = novaPessoa;

console.log(pessoa)