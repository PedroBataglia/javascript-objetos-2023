const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
};

const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
};

const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro}

console.log(guerreiro)


const mago = {
nome: "Gandalf",
classe: "mago"
}
const lutador = {
nome: "Aragorn",
classe: "guerreiro"
}

const ranger = {
nome: "Legolas",
classe: "ranger"
}

const senhorDosAneis = { ...mago, ...lutador, ...ranger}
console.log(senhorDosAneis);