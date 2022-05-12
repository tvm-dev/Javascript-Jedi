//1) Write one function that return the biggest value between values

//tvm
/* function returnMajorValue(n1, n2) {
  if (n1 > n2 ) {
  console.log(`The number ${n1} is major that ${n2}`)
  } else {
    console.log(`The number ${n2} is major that ${n1}`)
  }
}
returnMajorValue(1000, 30000); */

//Above function with improvements 1 by instrutor:
/* function max(x, y){
  if (x > y){
   return x; 
  }
  return y;
 }

console.log(max(10, 2)) */

//#################################################
//Above function with improvements 2 by instrutor:
/* function max(x, y){
  if (x > y) return x; return y;
 }
console.log(max(10, 2))
 */
//#################################################
//Above function with improvements 3 by instrutor:
// With Ternary condition
/* function max(x, y){
  return x > y ? x : y;
}  
console.log(max(10, 23))
 */

//Above function with improvements 4 by instrutor:
// With Arrow Function
/* const max = (x, y) => {
  return x > y ? x : y;
};
console.log(max(10, 2)) */

//Or -> final:
const max = (x, y) => x > y ? x : y;
console.log(max(10, 24))