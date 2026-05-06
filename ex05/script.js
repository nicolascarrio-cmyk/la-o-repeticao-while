let saldo = 1000; // Valor inicial na conta

while (saldo > 0) {
    let saque = parseFloat(prompt("Saldo atual: R$ " + saldo + "\nQuanto deseja sacar?"));
    if (saque > saldo) {
        alert("Saldo insuficiente! Tente um valor menor.");
    } else {
        saldo = saldo - saque;
        alert("Saque realizado! Saldo restante: R$ " + saldo);
    }
}

alert("Sua conta está zerada. Programa encerrado.");