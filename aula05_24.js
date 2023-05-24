var app = new Vue({
    el:"#app",
    data:{
        firstName: "Joao",
        lastName: "Silva",
        fullName: '',
        contador:0,
        nome: '',
        n1:0,
        n2:0,
        result:0,
        flag:false,
    },
    //Por dado computado:
    computed:{
        fullName: function(){
            return this.firstName + " " + this.lastName;
        }
    },
    //Por Observador:
    watch:{
        firstName: function(val){
            return this.fullName = val + " " + this.lastName;
        },
        lastName: function(val){
            return this.fullName = this.firstName + " " + val;
        },
    },
    methods:{
        saudacao: function(){
            return this.lastName;
        },
        incrementa: function(){
            this.contador = this.contador + 1;
        },
        exibirNome: function(){
            alert(`Seu nom eh: ${this.nome}`);
        },
        adicao: function(){
            this.result = parseInt(this.n1) + parseInt(this.n2);
            this.flag = true;
        }
    }
});






