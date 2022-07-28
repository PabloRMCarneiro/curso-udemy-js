/* const data = new Date();

console.log(data.toString());  */

const data = new Date('2020-01-01 20:20:53');

console.log(data.toString());  

console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() + 1 ); // 0 - Janeiro e 11 - Dezembro
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay() + 1); // 0 - Domingo e 6 - Sábado