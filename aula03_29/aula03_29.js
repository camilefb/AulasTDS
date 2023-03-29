// let nome = "Camile";
// let idade = 20;
// let num1 = window.prompt("Digite um numero: ");
// let num2 = window.prompt("Digite outro numero: ");
// let soma = parseInt(num1) + parseInt(num2);
// alert("Soma: " + soma);

// console.log("Oi");

//Function declaration
// function escrever(nome){
//     console.log(nome);
// }

// let x = escrever("Camile");
// console.log(x);
// console.log( escrever("Camile") );


// const z = (a,b,c) => {
//     return a + b + c;
// }
// const y = z;
// console.log( y(2,3,4) );



// const w = (a,b,c) => a + b + c;
// console.log( w(2,3,4) );

// (function(){
//     let x = 10;
//     console.log(x);
// })();

function mask_date(){
    console.log("oi")
    let numChar = document.getElementById("data").value.length
    if(numChar == 2){
        document.getElementById("data").value = document.getElementById("data").value + "/"
    }
}