class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando.`);
    }

}

const p1 = new Pessoa('Pablo', 'Ryan');

console.log(p1);

/* Creating a private property. */

const _velocidade = Symbol('velocidade');

/* The class Carro has a constructor that takes a parameter nome and sets the
property nome to the value of the parameter nome. It also sets the property
_velocidade to 0. The class Carro has two methods: acelerar and freiar. The
method acelerar increases the value of the property _velocidade by 1 if the
value of the property _velocidade is less than 100. The method freiar decreases
the value of the property _velocidade by 1 if the value of the property
_velocidade is greater than 0. */

class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++){
    c1.acelerar();
}
console.log(c1);