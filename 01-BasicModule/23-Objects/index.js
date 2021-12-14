//const person1 = {
//   name: 'Thiago',
//   lastName: 'Viana',
//   age: 37
// }

// console.log(person1.name)
// console.log(person1.lastName)
// console.log(person1.age)
//----------------------------------------
//Create person
// function createPerson (namee, lastName, age){
//   return {namee, lastName, age};
// }

// const person1 = createPerson('Thiago', 'Viana', 37)
// const person2 = createPerson('Eike', 'Menezes', 11)
// console.log(person1.namee, person1.age)
// console.log(person2.namee, person2.age)
//----------------------------------------
const person1 = {
  namee: 'Thiago',
  lastName: 'Viana',
  Age: 37,

  Speak(){
    console.log(`${this.namee} ${this.lastName} is speaking hi and: my age today is ${this.Age}! `);
    },
    increaseAge(){
      ++this.Age;
    }
  }
person1.Speak()
person1.increaseAge()
person1.Speak()
