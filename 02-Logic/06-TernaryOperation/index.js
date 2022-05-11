//Ternary Operator in JS is: '? :'


const points = 800;
//Normal If:
// if (points >= 1000 ) {
//   console.log(`Vip User :)`);
//  } else {
//    console.log(`Normal User :(`);
//  }

//Use if Ternary  Operators: Struture -> (condition) ? 'value for true result' : 'value for false result'
const levelUser = points >= 1000 ? 'Vip User :)' : 'Normal User :(';
//How to set a Default value:
const userColor = null;
const defaultColor = userColor || 'black';

console.log(levelUser, defaultColor);