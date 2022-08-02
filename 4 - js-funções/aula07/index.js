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
        },
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto(nomeCompleto){
            nomeCompleto = nomeCompleto.split(' ');
            this.nome = nomeCompleto[0];
            this.sobrenome = nomeCompleto[1];
            
            for (let i = 2; i < nomeCompleto.length; i++){
                this.sobrenome += ' ' + nomeCompleto[i];
            }
            
        }

    };
}

const p1 = criaPessoa('Pablo', 'Ryan', 1.8, 80);
console.log(p1.fala('falando sobre JS'))
console.log(p1.imc())
console.log(p1.nomeCompleto)
p1.nomeCompleto = 'Maria Oliveira Silva de Castro Santos'
console.log(p1.nomeCompleto)