//16-AttributionByDestructuring using Objects!

const person = {
  name: 'Thiago',
  lastName: 'Viana',
  age: 38,
  address: {
    //in English: number + street + city + state + zip code + country
    number: 1000,
    av: 'Paulista'
  },
};

//Atribution via Destructuring:
//const { name = 'No name', lastName, age, address } = person
//const {
  //address: { av: a = 12345, number }, address } = person

//console.log(person.name)
//console.log(name, lastName, age)
//console.log(a, number, address)

//Using Rest:
const {name, ...rest} = person
console.log(rest, name)


 


