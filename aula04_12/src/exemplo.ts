// var num1 = document.getElementById("txtN1") as HTMLInputElement;
// var num2 = document.querySelector("#txtN2") as HTMLInputElement;
// var botao = document.querySelector("#btn") as HTMLButtonElement
// var resul = document.querySelector("#txtResult") as HTMLInputElement;

// function somar(n1: number, n2: number): number{
//     return n1 + n2;
// }

// botao.addEventListener('click', function(){
//     resul.value = String(somar( Number(num1.value) , Number(num2.value)) );
// })


// //let pessoa: object
// let pessoa:{
//     nome: string,
//     idade: number
// }
// pessoa = {
//     nome: "Maria",
//     idade: 20,
// }
// console.log(pessoa); //ok
// //acusa erro
// console.log(pessoa.nome);

// let vet: object[]
// let pessoa1: object



//Aula 14/04
type documentType = number | string

function consultaDoc(doc: documentType){
    if(typeof doc === "number")
        console.log("Ok, numerico")
    else if( typeof doc === "string")
        console.log("ok, string")
    else
        throw new Error ("Tipo Incorreto");
}
consultaDoc("134ABC");
consultaDoc(1552515456);
//consultaDoc(null);

//tsc --init