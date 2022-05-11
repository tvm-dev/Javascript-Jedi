// for in -> read the index or key from object!


//const fruits = ['Apple', 'Banana', 'Strawberry'];
//const persons = ['Thiago Viana', 'Eike Viana', 'Paloma Menezes'];
const persons = {
  name: 'Thiago',
  lastName: 'Menezes',
  age: 38
}

//Classic for
/* for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
} */

//for in
for (let i in persons) {
  //console.log(persons[i]);
}

console.log(persons.name)

