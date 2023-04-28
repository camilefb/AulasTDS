var formul = document.querySelector("#idForm");
var arrayPessoas = new Array();
formul.addEventListener("submit", function (event) {
    event.preventDefault();
    var nome = formul.querySelector("#txtNome");
    var email = formul.querySelector("#txtEmail");
    var senha = formul.querySelector("#txtSenha");
    var idade = formul.querySelector("#txtIdade");
    var pessoa = new Pessoa2(nome.value, email.value, senha.value, Number(idade.value));
    arrayPessoas.push(pessoa);
    agradece(arrayPessoas);
});
function agradece(arrayPessoas) {
    formul.innerHTML = '<div class="container col-5" id="divAgradece">' +
        '<h2>Cadastro Realizado</h2>' +
        '</div>';
    var divAgradece = document.querySelector("#divAgradece");
    var vetNomes = arrayPessoas.map(function (el) { return el.nome; });
    var ultimo = vetNomes.filter(function (el, i, array) {
        if (i === array.length - 1)
            return el;
    });
    console.log(vetNomes);
    var p = novoParagrafo();
    p.innerText = "Obrigado ".concat(ultimo, " pelo seu cadastro.");
    divAgradece.appendChild(p);
}
function novoParagrafo() {
    var p = document.createElement("p");
    return p;
}
var Pessoa2 = /** @class */ (function () {
    function Pessoa2(nome, email, senha, idade) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.idade = idade;
    }
    return Pessoa2;
}());
