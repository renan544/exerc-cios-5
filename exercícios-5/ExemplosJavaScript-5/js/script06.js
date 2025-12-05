let maior = -Infinity;
let menor = Infinity;

for (let i = 1; i <= 10; i++) {
    let num = Number(prompt("Digite um número:"));
    if (num > maior) maior = num;
    if (num < menor) menor = num;
}

console.log("Maior =", maior);
console.log("Menor =", menor);
