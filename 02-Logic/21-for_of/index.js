//for of -> used for iterables objects

//variable base:
//const letters = 'Thiago Viana';
const persons = ['Thiago', 'Paloma', 'Eike']

//Classic for:
console.log('#######################');
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i])
}

console.log('#######################');

//For in
for (let i in persons ) {
  console.log(persons[i])
}
console.log('#######################');

//for of: -> to get values from string, for exemple:

for (let values of persons) {
  console.log(values)
}
console.log('#######################');

//for each: to get values and index from array persons.
persons.forEach(function(value, index, array){
  console.log(value, index, array)
});
