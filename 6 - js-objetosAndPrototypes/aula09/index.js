/**
 * The function criaPessoa() creates a new object with the prototype
 * pessoaPrototype and the properties nome and sobrenome.
 * @param nome - {value: nome},
 * @param sobrenome - {value: sobrenome}
 */
function criaPessoa(nome, sobrenome){
    const pessoaPortotype = {
        falar(){
            console.log(`${this.nome} está falando.`);
        }, 
        comer(){
            console.log(`${this.nome} está comendo.`);
        },
        beber(){
            console.log(`${this.nome} está bebendo.`);
        },
    };

    return Object.create(pessoaPortotype,{
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('João', 'Silva');

console.log(p1.nome, p1.sobrenome)
p1.falar();
p1.comer();
p1.beber();