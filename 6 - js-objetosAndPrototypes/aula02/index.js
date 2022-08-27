// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  this.estoque = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // valor da chave
    writable: false, // pode se alterar ou não o valor
    configurable: false, // pode ou não deletar a chave
  });

  Object.defineProprieties(this, {
    nome: {
      enumerable: true,
      value: estoque,
      writable: false,
      configurable: false,
    },
    preco: { 
      enumerable: true,
      value: estoque,
      writable: false,
      configurable: false,
    },
  });
}

const p1 = new Produto("Notebook", 2999.9, 3);
console.log(p1);
