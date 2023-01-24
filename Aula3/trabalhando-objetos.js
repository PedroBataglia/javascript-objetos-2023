let meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

// console.log(meuCarro["fabricacao"], meuCarro["modelo"], meuCarro["ano"]);

for (let campo in meuCarro) {
    console.log(`${campo} => ${meuCarro[campo]}`);
};


let meuObj = new Object(),
str = "minha string",
alert = Math.random(),
obj = new Object();

meuObj.tipo = "Sintaxe de ponto";
meuObj["data de criacao"] = "string com espaco";
meuObj[str] = "valor de string";
meuObj[alert] = "número aleatório";
meuObj[obj] = "Objeto";
meuObj[""] = "Mesmo uma string vazia";
console.log(meuObj);