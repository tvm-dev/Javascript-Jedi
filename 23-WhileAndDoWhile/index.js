//While -> used when you do not know you looping will be finish

/* let number = 0;

while (number <= 10 ){
  console.log(number);
  number++;
  //number+=2;
} */

//Creating a aleatory number and go walking through that
function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}
  
  const min = 1;
  const max = 50;
  //let rand = random(min, max);
  let rand = 0;
  
  while (rand !== 10 ){
    rand = random(min, max);
    console.log(rand);
     
}
console.log('#####')


// Do While: this function execute the condition, them that check the values! Let's see one exemple:

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);