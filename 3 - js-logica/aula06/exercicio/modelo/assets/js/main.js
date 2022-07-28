function dateExtraction(){
    const date = new Date();

    const dayWeek = date.getDay();
    const dayMonth = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    return [dayWeek, dayMonth, month, year, hour, minute];
}

const date = dateExtraction();
let dayWeekAndMonth = ['', '']

switch(date[0]){
    case 0:
        dayWeekAndMonth[0] = "Domingo";
        break;
    case 1:
        dayWeekAndMonth[0] = "Segunda-feira";
        break;
    case 2:
        dayWeekAndMonth[0] = "Terça-feira";
        break;
    case 3:
        dayWeekAndMonth[0] = "Quarta-feira";
        break;
    case 4:
        dayWeekAndMonth[0] = "Quinta-feira";
        break;
    case 5:
        dayWeekAndMonth[0] = "Sexta-feira";
        break;
    case 6:
        dayWeekAndMonth[0] = "Sábado";
        break;
    default:
        dayWeekAndMonth[0] = "Data Inválida";
}

switch(date[2]){
    case 0:
        dayWeekAndMonth[1] = "Janeiro";
        break;
    case 1:
        dayWeekAndMonth[1] = "Fevereiro";
        break;
    case 2:
        dayWeekAndMonth[1] = "Março";
        break;
    case 3:
        dayWeekAndMonth[1] = "Abril";
        break;
    case 4:
        dayWeekAndMonth[1] = "Maio";
        break;
    case 5:
        dayWeekAndMonth[1] = "Junho";
        break;
    case 6:
        dayWeekAndMonth[1] = "Julho";
        break;
    case 7:
        dayWeekAndMonth[1] = "Agosto";
        break;
    case 8:
        dayWeekAndMonth[1] = "Setembro";
        break;
    case 9:
        dayWeekAndMonth[1] = "Outubro";
        break;
    case 10:
        dayWeekAndMonth[1] = "Novembro";
        break;
    case 11:
        dayWeekAndMonth[1] = "Dezembro";
        break;
    default:
        dayWeekAndMonth[1] = "Data Inválida";
}

const result = document.querySelector(".text-main")

result.innerHTML = `<p>${dayWeekAndMonth[0]}, ${date[1]} de ${dayWeekAndMonth[1]} de ${date[3]} ${date[4]}:${date[5]}</p>`; 
