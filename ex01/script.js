let numero;

do {
    numero = parseFloat(prompt("Digite um número positivo:"));

    if (isNaN(numero) || numero < 0) {
        alert("Entrada inválida! Digite um número maior ou igual a zero.");
    }
} while (isNaN(numero) || numero < 0);

console.log("Número válido digitado: " + numero);
alert("Sucesso! Você digitou: " + numero);