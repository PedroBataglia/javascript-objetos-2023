const numeros = [1, 2, 3, 4, 5, 6] // vetor original

const quadrados = numeros.map((item) => {
    return Math.pow(item, 2) // returna o item original ao quadrado
});

console.log(quadrados);