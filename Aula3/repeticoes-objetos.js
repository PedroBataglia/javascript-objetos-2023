const pessoa = {
    nome: "Marcos",
    idade: 34,
    email: ["Marcos@firma.com", "marcosandeade@log.com"],
    telefone: ["2384509", "09328475"]
}

pessoa.animalEstimacao = [{
    nome: "Kripto",
    raça: "Cão",
    vacinado: true,
}];

pessoa.animalEstimacao.push({
    nome: "Ace",
    raça: "cão",
    vacinado: true,
});

pessoa.animalEstimacao.push({
    nome: "Brutos",
    raça: "cão",
    vacinado: false,
});

for (let campo in pessoa) {
    console.log()
}