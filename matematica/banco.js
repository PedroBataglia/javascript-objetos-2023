valorParaSacar = 230;

function sacar(valor) {
    let notasDeCem = 0;
    let notasDeCinquenta = 0;
    let notasDeDez = 0;
    let notasDeVinte = 0;
    while(valor >= 100) {
        notasDeCem += 1;
        valor -= 100;
    }
    while(valor >= 50) {
        notasDeCinquenta += 1;
        valor -= 50;
    }
    while(valor >= 20) {
        notasDeVinte += 1;
        valor -= 20;
    }
    while(valor >= 10) {
        notasDeDez += 1;
        valor -= 10;
    }
    return notas = [notasDeCem, notasDeCinquenta, notasDeVinte, notasDeDez]
}

console.log(`Valor para sacar ${valorParaSacar}`)
const notasDinheiro = sacar(valorParaSacar);
console.log(`Você vai receber: 
${notasDinheiro[0]} notas de 100 reais; 
${notasDinheiro[1]} notas de 50 reais;
${notasDinheiro[2]} notas de 20 reais;
${notasDinheiro[3]} notas de 10 reais;`);