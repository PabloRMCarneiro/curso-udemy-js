const pessoas = [
  { id: 3, nome: "João" },
  { id: 2, nome: "Maria" },
  { id: 1, nome: "Pedro" },
];

const novasPessoas = new Map();

for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);
console.log(novasPessoas.get(3));
console.log(novasPessoas.keys());

novasPessoas.delete(2);