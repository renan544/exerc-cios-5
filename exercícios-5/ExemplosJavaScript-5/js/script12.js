let n = Number(prompt("Digite um número:"));
let fat = 1;

for (let i = n; i >= 1; i--) {
    fat *= i;
}

console.log("Fatorial =", fat);
