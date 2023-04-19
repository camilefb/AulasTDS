"use strict";
// var num1 = document.getElementById("txtN1") as HTMLInputElement;
// var num2 = document.querySelector("#txtN2") as HTMLInputElement;
// var botao = document.querySelector("#btn") as HTMLButtonElement
// var resul = document.querySelector("#txtResult") as HTMLInputElement;
function consultaDoc(doc) {
    if (typeof doc === "number")
        console.log("Ok, numerico");
    else if (typeof doc === "string")
        console.log("ok, string");
    else
        throw new Error("Tipo Incorreto");
}
consultaDoc("134ABC");
consultaDoc(1552515456);
//consultaDoc(null);
