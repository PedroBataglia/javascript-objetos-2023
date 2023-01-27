const nota1 = 5;
const nota2 = 6;
const nota3 = 10;
let aprovado = "";

const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    aprovado = "aprovado";
} else {
    aprovado = "reprovado";
}


console.log(`O aluno tem média ${media} e ele está ${aprovado}`);