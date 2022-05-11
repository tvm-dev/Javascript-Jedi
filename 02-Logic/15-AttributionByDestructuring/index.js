//16-AttributionByDestructuring using Arrays!
/* 
let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const numbers = [1, 2, 3];
[a, b, c] = numbers;

console.log(a, b, c); */
//============================

 //const numbers = [1, 2, 3, 4, 5, 100, 'home', 'tvm', 'UoPeople', 'more','etc' ]
 //const [first, second, ...rest] = numbers
 //console.log(rest)

 //-> skip values using empty spaces with commas
 /* const [first, ,third] = numbers
 console.log(first, third ) */
//Sub arrays:
//indices            0          1
//                  0 1 2    0 1 2 
 const numbers = [ [1,2,3], [4,5,6] ]
 //console.log(numbers[0][2]) or like this:
 const [,[,,six]] = numbers
 console.log(six)


 


