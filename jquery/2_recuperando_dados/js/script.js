$(document).ready(function() {
   
    //adicionar o css
    $("#lista").css("color", "red");
    // adicionando HTML
    $('.element').html("Meu texto via jQuery");

    //dispara no click
    $("a").click(function() { //irá executar somente quando clicar no elemento "a"
        alert("Olá mundo")
    })

});

// Criando função

function pegarvalor() {
    var nome = document.querySelector('.nome').value; //seletor da classe nome
    var sobrenome = document.querySelector('.sobrenome').value;

    alert("Seja bem vindo(a) " + nome + " " + sobrenome + "!");
    console.log(sobrenome);
}