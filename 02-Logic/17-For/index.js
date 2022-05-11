//For: repetition looping

/* console.log('Line 0')
console.log('Line 1')
console.log('Line 2')
console.log('Line 3')
console.log('Line 4')
console.log('Line 5') */

//i -> index
//for (let i = 0; i<=5; i++) {
//console.log(`Line ${i}`)

//Jump 10 in 10
/* for (let i = -10; i<=105; i+=12) {
    console.log(`Line ${i}`)
 */
 //Numbers: ever and odd
/* for (let i = 0; i <= 10; i++) {
  //const evenNumber = i % 2 === 0;
  const evenNumber = i % 2 === 0 ? 'even' : 'odd'
    console.log(i, evenNumber)
}
 */


//Go through one array with For
const fruits = ['Apple', 'Banana', 'Grape', 'Strawberry', 'more fruits']

for (let i = 0; i < fruits.length; i++) {
console.log(`Index ${i}:`, fruits[i])
}