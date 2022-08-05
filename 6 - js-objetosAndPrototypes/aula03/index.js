function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
  
    this.estoque = estoque;
  
    Object.defineProperty(this, "estoque", {
      enumerable: true, // mostra a chave
      configurable: false, // pode ou não deletar a chave
      get: function (){
        return estoque;
      },
      set: function(valor){
        if ( typeof valor === 'number' && valor >= 0 ) {
        estoque = valor;
        }
      },
    });
    
   
  }
  
  const p1 = new Produto("Notebook", 2999.9, 3);
  console.log(p1);
  console.log(p1.estoque)
  p1.estoque = 10;
  console.log(p1.estoque);
