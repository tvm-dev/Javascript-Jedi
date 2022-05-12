 /* 
 
 || -> OR 
 && -> And (Plus)
 
 */

//By tvm:
/* function FizzBuzz(n){
if (isNaN(n)) {
  console.log(`Your input ${n} is not a number. Type only numbers from 0 until 100!`);
} else if (n < 1 || n > 100 ) {  
  console.log(`Your input is out range. Type only numbers from 0 until 100!`);

} else if (n % 3 === 0 && n % 5 === 0) {
  console.log('FizzBuzz -> number divisible by 3 and 5!');

} else if (n % 3 !== 0 && n % 5 !== 0) {
  console.log(`Your number ${n} is not divisible by 3 and not by 5! Try other numbers :)`);
  
} else if (n % 3 === 0) {
    console.log('Fizz -> number divisible by 3!')
} else if (n % 5 === 0) {
      console.log('Buzz -> number divisible by 5!')
}
}

FizzBuzz(35); */

//By instructor
function fizzBuzz(n) {
  if (typeof n !== 'number') return n;
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0 ) return 'Fizz 3';
  if (n % 5 === 0 ) return 'Buzz 5 ';
  return n;
}

for (let i = 0; i <= 19; i++){
  console.log(i, fizzBuzz(i));
}

