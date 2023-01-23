const cliente = {
    nome: "João",
    idade: 25,
    email: "joao@firma.com",
    telefone: ["3459238457", "0330495235"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`pagamento executado. Novo saldo: ${this.saldo}`);
        }
    },
};

cliente.efetuaPagamento(190)