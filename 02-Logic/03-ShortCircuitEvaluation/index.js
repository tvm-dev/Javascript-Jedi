/*
&& -> false && true -> false "the same true value"

Falses values in JS: 0, false, 0, '', " ", ` `, null, undefined, NaN.
All others values area considerable true !

*/
//Uses && AND
//console.log('tvm' && '' && 'thiago');

//Uses || OR
// const userColor = 'blue';
// const defaultColor = userColor || 'red';
// console.log(defaultColor);

//Uses || and return the first true value:
const a = 0.01;
const b = null;
const c = false;
const d = false;
const e = 0;
console.log( a || b || c || d || e );