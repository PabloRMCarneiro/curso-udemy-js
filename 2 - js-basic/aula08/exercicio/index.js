let num = Number(prompt("Informe um numero: "));

document.body.innerHTML += `<h1>O numero informado foi: ${num}</h1> <br/><br/>`;
document.body.innerHTML += `<p>Raiz quadrada do numero: ${(Math.sqrt(num)).toFixed(4)}<br/><br/><p>`;
document.body.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}<br/><br/><p>`;
document.body.innerHTML += `<p>É NaN: ${Number.isNaN(num)}<br/><br/><p>`;
document.body.innerHTML += `<p>Arredondamento para baixo: ${Math.floor(num)}<br/><br/><p>`;
document.body.innerHTML += `<p>Arredondamento para cima: ${Math.ceil(num)}<br/><br/><p>`;
document.body.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}<br/><br/><p>`;