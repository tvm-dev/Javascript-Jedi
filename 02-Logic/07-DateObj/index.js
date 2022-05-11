//Working the Dates:
//Date function é Construction Funcian and begin with a Capital Letter
// //const oneDay = (60 * 60 * 24 * 1000);
 //const date = new Date(); //Use Date function now!
// //One day:
// console.log('Dia', date.getDate());
// console.log('Mês', date.getMonth() + 1); //Começa no zero
// console.log('Ano', date.getFullYear());
// console.log('Hora', date.getHours());
// console.log('Min', date.getMinutes());
// console.log('Sec', date.getSeconds());
// console.log('Dia Semana', date.getDay()); //0 = Domingo e 6 = Sábado
// console.log(date.toString());  
// console.log(Date.now());  

function zeroLeft(n){
  return n >= 10 ? n : `0${n} `; 
}

//Função para Formatar Data:
function formatDate(date){
//  console.log(date);
const dia = zeroLeft(date.getDate());
const mes = zeroLeft(date.getMonth() + 1);
const ano = zeroLeft(date.getFullYear());
const hora = zeroLeft(date.getHours());
const min = zeroLeft(date.getMinutes());
const seg = zeroLeft(date.getSeconds());

return ` ${dia}/${mes}/${ano} ${hora}:${min}:${seg} `;


}
const date = new Date();
const brazilDate = formatDate(date);
console.log(brazilDate);














