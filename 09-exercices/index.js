//Declarations:
//console.clear(''); //Clean the console
const name = 'Thiago Viana'
const lastName = ' de Menezes'
const age = 37
const weight = 95
const height = 1.84
let yearBirthday = 1984
let imc = (weight / (height * height ))


//
console.log(name + lastName, 'have', age, 'years old and', weight,'kg.')
//console.log('Too have', height, 'height and your BMI is', imc)

//Now, uses ||| Templates Strings |||: this is a better way, is more legible
console.log(`Too have ${height} height and your BMI is ${imc}`);
console.log(`${name} born in ${yearBirthday}`)