let nomes = [];

for (let i = 1; i <= 5; i++) {
    nomes.push(prompt("Digite um nome:"));
}

nomes.reverse();

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
