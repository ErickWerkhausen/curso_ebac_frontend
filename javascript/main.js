

function calcularMediaFinal(params) {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];

    }

    return somaDasNotas / notas.length;

}