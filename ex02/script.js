let soma = 0;
let quantidade = 0;
let nota = 0;
while (nota >= 0) {
    nota = parseFloat(prompt("Digite uma nota (ou negativo para sair):"));
    if (nota >= 0) {
        soma = soma + nota;
        quantidade = quantidade + 1;
    }
}
if (quantidade > 0) {
    let media = soma / quantidade;
    alert("A média é: " + media);
} else {
    alert("Nenhuma nota foi registrada.");
}