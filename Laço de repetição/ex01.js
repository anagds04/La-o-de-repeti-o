// 1. Imprima os números de 1 a 10 no console.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Imprima todos os números pares de 0 a 20.
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. Some todos os números de 1 a 100 e exiba o resultado.
let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log("Soma de 1 a 100:", soma);

// 4. Exiba a tabuada de um número (simulado como 7)
let numero = 7;
console.log("Tabuada de", numero);
for (let i = 1; i <= 10; i++) {

    console.log(`${numero} x ${i} = ${numero * i}`);
}

// 5. Leia 5 notas e calcule a média
let notas = [7, 8.5, 9, 6, 7.5];
let total = 0;
for (let i = 0; i < notas.length; i++) {
    total += notas[i];
}
let media = total / notas.length;
console.log("Média das notas:", media);

// 6. Conte quantos números pares existem no array
let numeros = [3, 8, 12, 7, 5, 14, 9, 10];
let pares = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares++;
    }
}
console.log("Quantidade de pares:", pares);

// 7. Gere 10 números aleatórios de 1 a 100
console.log("Números aleatórios:");
for (let i = 0; i < 10; i++) {
    let aleatorio = Math.floor(Math.random() * 100) + 1;
    console.log(aleatorio);
}

// 8. Continue pedindo senha até digitar "1234"
let tentativa = "0000"; // valor inicial simulado

let senhaCorreta = "1234";
while (tentativa !== senhaCorreta) {
    console.log("Senha incorreta:", tentativa);
    tentativa = "1234"; // simula nova tentativa correta
}
console.log("Senha correta, acesso liberado!");

// 9. Exiba somente números maiores que 50
let lista = [12, 67, 34, 89, 23, 55, 100, 3];
console.log("Números maiores que 50:");
for (let i = 0; i < lista.length; i++) {
    if (lista[i] > 50) {
        console.log(lista[i]);
    }
}