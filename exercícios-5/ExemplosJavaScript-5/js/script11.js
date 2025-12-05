let maiores = 0;

for (let i = 1; i <= 10; i++) {
    let idade = Number(prompt("Digite a idade:"));
    if (idade >= 18) maiores++;
}

console.log("Maiores de idade =", maiores);
