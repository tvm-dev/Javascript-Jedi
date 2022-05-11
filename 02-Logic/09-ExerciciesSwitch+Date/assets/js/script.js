//Date and Time:
function mostrarDiaSemana(weekDay){
let weekDayText;
  
switch (weekDay){
    case 0:  weekDayText= 'Domingo'; return weekDayText;
    case 1:  weekDayText= 'Segunda-Feira'; return weekDayText;
    case 2:  weekDayText= 'Terça-Feira'; return weekDayText;
    case 3:  weekDayText= 'Quarta-Feira';return weekDayText;
    case 4:  weekDayText= 'Quinta-Feira'; return weekDayText;
    case 5:  weekDayText= 'Sexta-Feira'; return weekDayText;
    case 6:  weekDayText= 'Sábado'; return weekDayText;
       
  }
    
  }
function showFullDate (date){
document.getElementsByClassName('container');
    let dayMonth = date.getDay();
    let month = (date.getMonth() + 1);
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    return  `${dayMonth} de ${month} de ${year} ${hour}:${min}` 
 
}
const date = new Date();
let weekDay = date.getDay();
const weekDayText = mostrarDiaSemana(weekDay);
let allDates = showFullDate(date);


//Mostrar
document.querySelector('.container').innerHTML = `<b> ${weekDayText},   </br>`;