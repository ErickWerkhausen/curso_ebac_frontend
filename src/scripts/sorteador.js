// Gerar um número aleatório entre 1 e 100
var numeroSorteado = Math.floor(Math.random() * 100) + 1;
var tentativas = 0;

function verificar() {
    // Obter o valor digitado pelo usuário
    var tentativa = parseInt(document.getElementById("tentativa").value);

    // Verificar se a tentativa está correta
    if (tentativa == numeroSorteado) {
        // Se estiver correta, exibir mensagem de acerto
        document.getElementById("resultado").innerHTML = "Parabéns! Você acertou o número sorteado era o número " + (numeroSorteado);

        numeroSorteado = Math.floor(Math.random() * 100) + 1;

    } else if (tentativa != numeroSorteado) {
        // Se for diferente, exibir mensagem do erroa
        document.getElementById("resultado").innerHTML = "Que pena que não foi desta vez, tente de novo!";

        if (tentativa > numeroSorteado) {
            document.getElementById("resultado").innerHTML = "Tente um numero menor";
        } else if (tentativa < numeroSorteado) {
            document.getElementById("resultado").innerHTML = "Tente um numero maior";
        }
    }

}
