const data = new Date();

const diaSemana = data.getDay();

/* if(diaSemana === 0){
    console.log('Domingo');
}
else if(diaSemana === 1){
    console.log('Segunda');
}
else if(diaSemana === 2){
    console.log('Terça');
}
else if(diaSemana === 3){
    console.log('Quarta');
}
else if(diaSemana === 4){
    console.log('Quinta');
}
else if(diaSemana === 5){
    console.log('Sexta');
}
else if(diaSemana === 6){
    console.log('Sábado');
}
else{
    console.log('Data inválida');
} */

// exemmplificação do switch/case para o tratamento de casos. A cima está o mesmo código usando if/else


switch(diaSemana){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sexta');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('Data inválida');
        break;
}