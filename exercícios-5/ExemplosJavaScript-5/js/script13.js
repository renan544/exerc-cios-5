let N = Number(prompt("Digite um número:"));
let soma = 0;

for (let i = 1; i <= N; i++) {
    if (i % 3 === 0) soma += i;
}

console.log("Soma =", soma);
