const objA = {
  chaveA: "A",
  //__proto__: Object.prototype
};

console.log(objA.__proto__ === Object.prototype);

const objB = {
  chaveB: "B",
  // __proto__: objA
};

/* Setting the prototype of objB to objA. */

Object.setPrototypeOf(objB, objA);

console.log(objB.chaveA);

function produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * percentual) / 100;
};

produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * percentual) / 100;
};

const p1 = new produto('Camiseta', 50);

console.log(p1);

p1.desconto(50);

console.log(p1);

p1.aumento(50);

console.log(p1)

const p2 = {
    nome: 'Caneca',
    preco: 15
};

/* Setting the prototype of p2 to produto.prototype. */

Object.setPrototypeOf(p2, produto.prototype);

p2.aumento(50);
p2.desconto(50);

console.log(p2.preco);

