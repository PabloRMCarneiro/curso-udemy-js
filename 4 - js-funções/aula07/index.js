// Factory function

function criaPessoa (nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,
        fala: function(assunto){
            return `${this.nome} está ${assunto}`
        },
        altura,
        peso,
        imc(){
            return (this.peso / (this.altura * this.altura)).toFixed(2)
        }

    };
}

const p1 = criaPessoa('Pablo', 'Ryan', 1.8, 80);
console.log(p1.fala('falando sobre JS'))
console.log(p1.imc())


