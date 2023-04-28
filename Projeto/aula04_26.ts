const formul = document.querySelector("#idForm") as HTMLDivElement;

let arrayPessoas = new Array<Pessoa>();

formul.addEventListener("submit", function(event){
    event.preventDefault();
    let nome = formul.querySelector("#txtNome") as HTMLInputElement;
    let email = formul.querySelector("#txtEmail") as HTMLInputElement;
    let senha = formul.querySelector("#txtSenha") as HTMLInputElement;
    let idade = formul.querySelector("#txtIdade") as HTMLInputElement;

    const pessoa = new Pessoa(nome.value, email.value, senha.value, Number(idade.value));
    arrayPessoas.push(pessoa);

    agradece(arrayPessoas);
})

function agradece(arrayPessoas:Array<Pessoa>){
    formul.innerHTML =  '<div class="container col-5" id="divAgradece">' +
                            '<h2>Cadastro Realizado</h2>' +
                        '</div>';
    const divAgradece = document.querySelector("#divAgradece") as HTMLDivElement;

    const vetNomes = arrayPessoas.map( el => el.nome );
    const ultimo = vetNomes.filter( (el, i, array)=> {
        if(i === array.length-1)
            return el;
    })
    console.log(vetNomes);

    let p = novoParagrafo();
    p.innerText = `Obrigado ${ultimo} pelo seu cadastro.`;
    divAgradece.appendChild(p);
}

function novoParagrafo(){
    const p = document.createElement("p");
    return p;
}


class Pessoa{
    nome:string;
    email:string;
    senha:string;
    idade:number;
    constructor(nome:string, email:string, senha:string, idade:number){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.idade = idade;
    }
}