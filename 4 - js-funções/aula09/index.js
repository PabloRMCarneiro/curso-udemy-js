// constructor functions -> objetos
// convenção: começar com letra maiúscula

function Pessoa(nome, sobrenome){
    const ID = 123456;

    const metodoInterno = function(){
        // não se pode acessar esse método fora do escopo, assim como a constante 'ID'
        console.log('metodo interno');
    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.fala = function(){
        console.log(`${this.nome} ${this.sobrenome}`);
    };
}

const p1 = new Pessoa('Luis', 'Silva'); // necessita da palavra 'new' para simbolizar que é uma função construtura

const p2 = new Pessoa('João', 'Santos');

p1.fala();