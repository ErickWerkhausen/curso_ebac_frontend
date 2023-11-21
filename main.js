$(document).ready(function () {
    $('.addTarefas button').click(function () {
        $('.listaAfazeres').slideDown();


    })

    $('.addTarefas').on('submit', function (e) {
        e.preventDefault();
        const nometarefa = $('#Nome-da-tarefa').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<li onclick="alteraTarefa(this)">${nometarefa}</li>"`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#Nome-da-tarefa').val(' ');
    })


})

function alteraTarefa(tarefa) {
    tarefa.style = "text-decoration:line-through";
}