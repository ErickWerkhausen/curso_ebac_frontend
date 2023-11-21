$(document).ready(function () {

    $('#tel').mask('(00) 000000000')

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00000-00')


    $('form').validate({
        rules: {
            name: {
                required: true,
                minWords: 2 
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true,
                minlength: 14
            },
            cpf: {
                required: true,
                minlength: 14
            },
            cep: {
                required: true,
                minlength: 8
            },
            address: {
                required: true
            },
        },
        messages: {
            name: 'Por favor, insira seu nome completo',
            tel : {minlength:'Número de telefone está incompleto'},
            cpf : {minlength:'cpf está incompleto'},
            cep : {minlength:'Cep está incopleto'},

        }

    })


})

