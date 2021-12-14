//Primitives area copied values, are imutables, like: string, number, boolean, undefined, etc
//Reference are values inherited, are mutables like: arrays, objetc, function. They are passed by reference (=)

//Exemples


let a = [1, 2, 3]
//let b = a
let b = [...a]
let c = b

console.log(a, b, c)

