const pessoa = {
    nome: "Marcos",
    idade: 34,
    email: ["Marcos@firma.com", "marcosandeade@log.com"],
    telefone: ["2384509", "09328475"]
}

pessoa.animalEstimacao = [{
    nome: "Kripto",
    raça: "Cão",
    vacinado: true
}];

pessoa.animalEstimacao.push({
    nome: "Ace",
    raça: "cão",
    vacinado: true
});

delete pessoa.animalEstimacao[0]

console.log(pessoa)