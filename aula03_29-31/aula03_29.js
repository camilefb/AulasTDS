// -------------------- Aula 29/03/23----------------------
// let nome = "Camile";
// let idade = 20;
// let num1 = window.prompt("Digite um numero: ");
// let num2 = window.prompt("Digite outro numero: ");
// let soma = parseInt(num1) + parseInt(num2);
// alert("Soma: " + soma);
// console.log("Oi");


//Function declaration
function escrever(nome){
    console.log(nome);
}
let a = escrever("Camile");
console.log(a);
console.log( escrever("Camile") );


//Function Expression
const z = (a,b,c) => {
    return a + b + c;
}
const y = z;
console.log( y(2,3,4) );

const w = (a,b,c) => a + b + c;
console.log( w(2,3,4) );


//Função anônima
(function(){
    let x = 10;
    console.log(x);
})();





// -------------------- Aula 31/03/23----------------------

//Higher-Order Functions: função sendo passada por parâmetro
function run(fn){
    fn();
}
function imprime(){
    console.log("Olá");
}
run(imprime);

//Higher-Order Functions: função sendo retornada de outra função
//Técnica de Curring
function precoFinal(taxa){
    return function(preco){
        return preco * (1 + taxa);
    }
}
let x = precoFinal(0.085);

console.log( x(25.1) );
console.log( x(40.1) );
console.log( x(98.1) );
