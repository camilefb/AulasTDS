// -------------------- Aula 05/04/23----------------------
//Parâmetros de funções e Arrays
function imprime(a, b, c){
    console.log(a, b, c);
}
imprime(1,2,3,4,5);  // 1 2 3
imprime(1);  //1 undefined undefined


//Array com notação spread/rest (...): desnecessário o uso de [] na chamada
const imprimeLista = (...lista) => {
    console.log( Array.isArray(lista) );
    for (let i in lista)
        console.log(i)
    for (let n of lista)
        console.log(n)

    lista.push(200);
}
imprimeLista( "Laranja", "Maçã", 2, 5.6, 4, "Banana" );


//Higher-Order Functions: passando função por parâmetro
function operacao(a){
    return function(b){
        return function(fn){
            return fn(a,b);
        }
    }
}
function multiplicar(a,b){
    return a * b;
}
console.log( operacao(3)(5)(multiplicar) );


//Map, Filter, Reduce
const V = [1,2,3,4,5,6];
// const alunos = [
//     {nome: "João", nota: 6.4},
//     {nome: "Maria", nota: 5.9},
//     {nome: "José", nota: 9.2},
//     {nome: "Pedro", nota: 8.4}
// ];

//Reduce Function
const f3 = (total, el) => total + el;
const V3 = V.reduce(f3);
console.log(V3);

//Map Function
const f1 = (el) => el * 2;
const V1 = V.map(f1);
console.log(V1);

//Filter Function
const f2 = (el) => el >= 4;
const V2 = V.filter(f2);
console.log(V2);