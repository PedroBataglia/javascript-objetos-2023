const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago"
    },
    status: "desaparecido"
}
delete objPersonagem.aliado;

console.log(objPersonagem);
console.log(objPersonagem.aliado);

const objPersonagem2 = objPersonagem;
objPersonagem2.nome = "Gandalf, O cinzento"

const objPersonagem3 =Object.create(objPersonagem)
objPersonagem3.nome = "Gandalf"

console.log(objPersonagem.nome);
console.log(objPersonagem2.nome);
console.log(objPersonagem3.nome);