const pessoa = {
    nome: "Pedro H.",
    idade: 19,
    altura: 1.77,
    peso: 71,
    profissao: "Programador",
    hobbies: [" Violão", " Musculação", " Leitura"],
};

pessoa.hobbies.push(" Desenho");
pessoa.peso = 70;
delete pessoa.profissao;

for (let item in pessoa) {
    console.log(` ${item}: ${pessoa[item]}`);
};

