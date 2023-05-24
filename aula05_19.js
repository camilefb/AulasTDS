var app = new Vue({
    el: '#app',
    data:{
        mensagem: "Bom dia",
        mensagem2: 'Boa tarde',
        dica: new Date().toLocaleString(),
        exibirTexto: true,

        array:[
            {item: "Tarefa 1"},
            {item: "Tarefa 2"},
            {item: "Tarefa 3"},
        ]
    },
    computed:{
        //dado computado
        inverteMensagem: function(){
            return this.mensagem.split('').reverse('').join('');
        }
    }

});

//Em tempo de execução:
app.mensagem2 = "Boa tarde";
app.array.push({item: "Tarefa 4"});
app.array.push({item: "Tarefa 5"});