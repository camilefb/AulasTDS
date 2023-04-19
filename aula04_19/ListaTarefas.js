const txtTarefa = document.querySelector(".txtTarefa");
const botao = document.querySelector(".btnAdicionar");
const listaTarefas = document.querySelector(".listaTarefas");

botao.addEventListener("click", function(e){
    criaTarefa(txtTarefa.value);
    limpaInput();
})

txtTarefa.addEventListener("keypress", function(e){
    if(e.keyCode === 13){
        criaTarefa(txtTarefa.value);
        limpaInput();
    }
})

function limpaInput(){
    txtTarefa.value = '';
    txtTarefa.focus();
}

listaTarefas.addEventListener("click", function(e){
    const elem = e.target;
    if(elem.classList.contains("btnApagar")){
        elem.parentElement.remove();
    }
})

function criaTarefa(novaTarefa){
    if(!novaTarefa) return

    const li = criaLi();
    li.innerText = novaTarefa;
    li.innerText += ' ';
    const botao = criaBotao();
    
    li.appendChild(botao);
    listaTarefas.appendChild(li);
}

function criaLi(){
    const li = document.createElement("li");
    return li;
}
function criaBotao(){
    const botao = document.createElement("button");
    botao.innerHTML = "Apagar";
    botao.classList.add("btn", "btn-primary", "btnApagar");
    botao.setAttribute("title", "Para apagar a tarefa");
    return botao;
}