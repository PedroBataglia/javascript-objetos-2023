const nota1 = 5;
const nota2 = 6;
const nota3 = 10;
const notas = [10, 5, 8, 3]
let aprovado = "";

const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    aprovado = "aprovado";
} else {
    aprovado = "reprovado";
}


console.log(`O aluno tem média ${media} e ele está ${aprovado}`);

let somaNotas = 0;

notas.push(7);

for (let i = 0; i < notas.length; i++) {
    console.log(`Nota nº${i+1} é ${notas[i]}`)
    somaNotas += notas[i]/notas.length;
}

console.log(somaNotas)

//         valor//qauntidade de posições//novo valor
//notas.splice(5, 1, 8);

let posicao = notas.indexOf(5);

notas.splice(posicao, 1, 8);

console.log(notas);