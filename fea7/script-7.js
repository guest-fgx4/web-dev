var nome = prompt("Digite seu nome:");


var renda = prompt("Digite sua renda:");

console.log(Number(renda));
console.log(typeof (Number(renda)));
console.log(isNaN(Number(renda)));


while (isNaN(Number(renda))) {
    renda = prompt("Renda invalida, por favor digite um numero:");
}

var despesa = prompt("Digite sua despesa:");

while (isNaN(Number(despesa))) {
    despesa = prompt("Despesa invalida, por favor digite um numero:");
}

if (despesa < 1) {
    despesa = 1;
}
else if (despesa > 5) {
    despesa = 5;
}

console.log(`Despesa: ${despesa}`)

var soma_dispesa = Number(0);

for (let index = 0; index < despesa; index++) {
    let numero;
    numero = prompt("Digite sua despesa:");
    while (isNaN(Number(numero))) {
        numero = prompt("Despesa invalida, por favor digite um numero:");
    }

    soma_dispesa = soma_dispesa + Number(numero);
}

var sobra = renda - soma_dispesa

console.log(`Nome do usuario: ${nome}`)
console.log(`Renda do usuario: ${renda}`)
console.log(`Total despesas: ${Number(soma_dispesa).toFixed(2)}`)
console.log(`Sobra restante: ${sobra}`)


if (soma_dispesa > renda) {
    alert("Voce gastou mais do que ganhou")
    console.log("Voce gastou mais do que ganhou")
}
else {
    
    if (sobra >= (renda*0.30)) {
        alert("Otimo: boa margem de sobra")
        console.log("Otimo: boa margem de sobra")
    }
    else {
        alert("OK: da para melhorar a sobra")
        console.log("OK: da para melhorar a sobra")
    }
}
