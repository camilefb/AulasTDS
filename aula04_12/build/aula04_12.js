var num1 = document.getElementById("txtN1");
var num2 = document.querySelector("#txtN2");
var botao = document.querySelector("#btn");
var resul = document.querySelector("#txtResult");
function somar(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    resul.value = String( somar(Number(num1.value), Number(num2.value)) );
});
