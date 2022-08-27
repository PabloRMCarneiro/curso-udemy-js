const produto = {nome: 'Caneca', preco: 1.8};
const outraCoisa = produto;

produto.nome = 'teste'; // altera outraCoisa também

console.log(outraCoisa); 

outraCoisa.nome = 'new test'; // altera produto

console.log(produto);

const newOutraCoisa = { ...produto}; // se alterar o objeto produto não altera o objeto newOutraCoisa

produto.nome = 'exemplo';

console.log(newOutraCoisa);

console.log(produto);

const outraCoisa2 = Object.assign({}, produto, {material: 'porcelana'}); 
// mesma coisa que {...produto}, terceiro argumento é a implementação de nova chave
 
console.log(outraCoisa2);

Object.freeze(outraCoisa2); // não permite alterar o objeto

console.log(Object.keys(outraCoisa2)); // mostra todas as chaves do objetos

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

/* 
    {
  value: 'exemplo',
  writable: true, // pode alterar
  enumerable: true, // pode ser impressor
  configurable: true // pode ser deletado
    }
 */

console.log(Object.values(outraCoisa2)); // mostra todos os valores do objeto

console.log('---------------------');
// iterar objeto

for (let entry of Object.entries(outraCoisa2)){
    console.log(entry);
}

for (let [chave, valor] of Object.entries(outraCoisa2)){
    console.log(chave, valor);
}