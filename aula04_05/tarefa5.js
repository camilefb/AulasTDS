// -------------------- Tarefa 5 ----------------------
//05/04/23
function range(a, b, p=1){
    let V = [];
    let n1, n2;
    if(b == undefined){
        n1 = 1;
        n2 = a;
    }
    else{
        n1 = a;
        n2 = b;
    }
    for(let i=n1; i<=n2; i += p){
        V.push(i);
    }
    return V;
}
console.log( range(5) );
console.log( range(6, 11) );
console.log( range(10, 19, 2) );