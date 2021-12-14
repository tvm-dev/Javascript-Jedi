// function Hi(name) {
//     return `Good Morning ${name}!`
// }
// const variable =  Hi('Thiago')
// console.log(variable)

// function sum(x = 0, y=0) {
//   const result = (x + y)/5
//   return result
// }
// console.log(sum(10, 20))
// console.log(sum())

//Const functions
// const root = function (n){
//   return n ** 0.5
// }

// console.log(root(9))
// console.log(root(16))
// console.log(root(18))


// //Arrow functions
// const root =  (n) => {
//   return n ** 0.5
// }

// console.log(root(9))
// console.log(root(16))
// console.log(root(25))

//Arrow functions
const root = n => n ** 0.5 //Wowwwwwwwwwwwwwwwwwwwwwww

console.log(root(9))
console.log(root(16))
console.log(root(25))



function person(name, age, address) {
  return ` Hello ${name}, how are you? I saw that you have ${age} years old and you live in ${address}, thats is right? `;
}

console.log(person('Thiago', 37, '38, Street Inocêncio Correia, São Paulo/SP'))
console.log(person('Eike Menezes', 11, '38, Street Inocêncio Correia, São Paulo/SP'))
