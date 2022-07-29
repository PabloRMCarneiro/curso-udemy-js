const nome = 'Pablo Ryan'
const nomes = ['Maria', 'Jose', 'Pedro0', 'João']
/* for( let i = 0; i < nome.length; i++){
    console.log(nome[i])
} */

/* for ( let i in nome){
    console.log(nome[i])
} */
/* 
for (let valor of nome){
    console.log(valor)
} */

nomes.forEach(function (valor, indice){
    console.log(valor, indice)
});
