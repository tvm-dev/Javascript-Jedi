/*
Continue: go to the next iteration
Break: go out the looping

*/



const numbers = [1,2,3,4,5,6,7]

for (number of numbers){

  if (number === 2) {
    console.log('Number 2 was jumped')
    continue;
  }
  if (number === 5) {
    break;
  }

  console.log(number)
}