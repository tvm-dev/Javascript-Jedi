//Colocar Switch dentro de 1 funcao:
function getTextWeekDay (weekDay){
  let weekDayText;
   switch (weekDay) {
    case 0: weekDayText = "Domingo"; return weekDayText;
    case 1: weekDayText = "Segunda"; return weekDayText;
    case 2: weekDayText = "Terça"; return weekDayText;
    case 3: weekDayText = "Quarta"; return weekDayText;
    case 4: weekDayText = "Quinta"; return weekDayText;
    case 5: weekDayText = "Sexta"; return weekDayText;
    case 6: weekDayText = "Sábado"; return weekDayText;
    default: weekDayText = 'Dia Indefinido';
  }
  
}


const date = new Date();
let weekDay = date.getDay();
const weekDayText = getTextWeekDay(weekDay);
//weekDay = 7;

// switch (weekDay) {
//   case 0: weekDayText = "Domingo"; break;
//   case 1: weekDayText = "Segunda"; break;
//   case 2: weekDayText = "Terça"; break;
//   case 3: weekDayText = "Quarta"; break;
//   case 4: weekDayText = "Quinta"; break;
//   case 5: weekDayText = "Sexta"; break;
//   case 6: weekDayText = "Sábado"; break;
//   default: weekDayText = 'Dia Indefinido';
// }




console.log(weekDay, weekDayText);
