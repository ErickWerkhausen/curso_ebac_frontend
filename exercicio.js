const alunos = [{ nome: 'Gustavo', nota: 7 },
{ nome: 'Augusto', nota: 2 },
{ nome: 'Igor', nota: 8 },
{ nome: 'Erick', nota: 10 },
{ nome: 'Paulo', nota: 6 }, 
{nome: 'Inacio', nota: 1}]

function notaMaior() {
    for (var i = 0; i < alunos.length; i++) {
        if (alunos[i].nota >= 6) {
            console.log(`O aluno ${(alunos[i].nome)} tem nota maior que 6, nota: ${alunos[i].nota} `);
        } 
}
}

notaMaior();