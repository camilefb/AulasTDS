var app = new Vue({
    el:"#app",
    data:{
        classeCSS: 'c1',
        aplicarC1: false,
        aplicarC2: false,
        cor: 'black',
        altura: '300px',
        largura: 200,
    },
    computed:{
        estilo: function(){
            return {c2: this.aplicarC2, c3:!this.aplicarC2};
        },
        estilo2: function(){
            return {'background-color': this.cor,
                     height: this.altura,
                     width: this.largura + "px",
                    };
        }
    }
})


// Exercício: criar um formulário que por padrão aparece campos para cadastro de pessoa física. 
// Mas se o usuário selecionar um checkbox marcando que é pessoa jurídica, os campos que devem 
// ser apresentados são de pessoa jurídica.
// var app = new Vue({
//     el:"#app",
//     data:{
//         flag: false,
//     }
// })