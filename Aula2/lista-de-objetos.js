const cliente = {
    nome: "João",
    idade: 25,
    email: "joao@firma.com",
    telefone: ["23421348", "2398471209"],
};

cliente.endereco = [ 
    {
        rua: "cleber machado de vilela",
        numero: 1335,
        apartamento: true,
        complemento: "ap 934",
    },
];

cliente.endereco.push({
    rua: "Amaral Mico Silva",
    numero: 1428,
    apartamento: false,
});

const listaApenasApartamentos = cliente.endereco.filter(
    (endereco) => endereco.apartamento === true
);


console.log(listaApenasApartamentos);
console.log(cliente.endereco);