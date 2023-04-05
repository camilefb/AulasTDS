function somar(){
    let num1 = document.getElementById("txtNum1").value;
    let num2 = document.getElementById("txtNum2").value;
    let result = parseFloat(num1) + parseFloat(num2);
    document.getElementById("txtResult").value = result;
}

function subtrair(){
    let num1 = document.getElementById("txtNum1").value;
    let num2 = document.getElementById("txtNum2").value;
    let result = parseFloat(num1) - parseFloat(num2);
    document.getElementById("txtResult").value = result;
}

function multiplicar(){
    let num1 = document.getElementById("txtNum1").value;
    let num2 = document.getElementById("txtNum2").value;
    let result = parseFloat(num1) * parseFloat(num2);
    document.getElementById("txtResult").value = result;
}

function dividir(){
    let num1 = document.getElementById("txtNum1").value;
    let num2 = document.getElementById("txtNum2").value;
    let result = parseFloat(num1) / parseFloat(num2);
    document.getElementById("txtResult").value = result;
}