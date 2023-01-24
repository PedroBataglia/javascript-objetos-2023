let meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

// console.log(meuCarro["fabricacao"], meuCarro["modelo"], meuCarro["ano"]);

for (let campo in meuCarro) {
    console.log(`${campo} => ${meuCarro[campo]}`);
};