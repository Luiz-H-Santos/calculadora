// Indica se o último botão pressionado foi um botão de operação
var ultimoOp = false;

// Armazena a operação selecionada
var operacao;

// Armazena o valor do primeiro operando
var operando01;


/*
 * Concatena ou substitui o conteúdo do display de saída
 */
function cliqueBotao(n) {

    var output = document.getElementById("output");

    if (ultimoOp) {
        output.innerHTML = n;
        ultimoOp = false;
    } else {
        output.innerHTML = parseFloat(output.innerHTML + n);
    }

}


/*
 * Recupera o primeiro operando e armazena a operação
 */
function cliqueOperacao(op) {

    operando01 = parseFloat(document.getElementById("output").innerHTML);

    operacao = op;

    ultimoOp = true;


}


function cliqueIgual() {

    var output = document.getElementById("output");
    var resultado;
    var operando02 = parseFloat(output.innerHTML);

    switch (operacao) {
    case "soma":
        resultado = operando01 + operando02;
        break;
    case "sub":
        resultado = operando01 - operando02;
        break;
    case "mult":
        resultado = operando01 * operando02;
        break;
    case "div":
        resultado = operando01 / operando02;
        break;
    default:
        output.innerHTML = "Erro: operação inválida!";
        break;

    }

    output.innerHTML = resultado;

}

function limparResultado() {
    document.getElementById("output").innerHTML = "0";
}
