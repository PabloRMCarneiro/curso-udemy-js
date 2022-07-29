const paisagemMode = (altura, largura) => altura < largura ? 'paisagem' : 'retrato';

console.log(paisagemMode(800, 600));
console.log(paisagemMode(1080, 1920))