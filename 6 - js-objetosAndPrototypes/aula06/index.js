function produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;
}

produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * percentual) / 100;
};

produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * percentual) / 100;
};

produto.prototype.venda = function (quantidade) {
  this.estoque -= quantidade;
};

produto.prototype.compra = function (quantidade) {
  this.estoque += quantidade;
};

function camiseta(nome, preco, estoque, cor) {
  produto.call(this, nome, preco, estoque);
  this.cor = cor;
}

camiseta.prototype = Object.create(produto.prototype);
camiseta.prototype.constructor = camiseta;

function caneca(nome, preco, estoque, material) {
  produto.call(this, nome, preco, estoque);
  this.material = material;
}

caneca.prototype = Object.create(produto.prototype);
caneca.prototype.constructor = caneca;

const p1 = new camiseta("regata", 50, 10, "azul");
const p2 = new caneca("caneca", 15, 4, "plastico");

console.log(p1);
console.log(p2);

p1.desconto(50);
p2.aumento(50);

console.log("-------------");

p1.compra(4);
p2.venda(2);

console.log(p1);
console.log(p2);
