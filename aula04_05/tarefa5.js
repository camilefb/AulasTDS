// // -------------------- Tarefa 5 ----------------------
// //05/04/23
// function range(a, b, p=1){
//     let V = [];
//     let n1, n2;
//     if(b == undefined){
//         n1 = 1;
//         n2 = a;
//     }
//     else{
//         n1 = a;
//         n2 = b;
//     }
//     for(let i=n1; i<=n2; i += p){
//         V.push(i);
//     }
//     return V;
// }
// console.log( range(5) );
// console.log( range(6, 11) );
// console.log( range(10, 19, 2) );


//Tarefa 6
const alunos = [
    { nome: 'Jake', nota: 6.4 },
    { nome: 'Susan', nota: 8.6 },
    { nome: 'Emma', nota: 9.4 },
    { nome: 'Peter', nota: 9.1 },
]



const V = alunos.map( el => el.nota );
const V2 = V.filter( el => el > 7 );
const V3 = V2.reduce( (acc, el, i, array) => {
    if(i == array.length-1){
        return (acc += el) / array.length;
    }
    else{
        return acc += el;
    }
})
console.log(V3);