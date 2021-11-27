// Arrow functions

// 1. modern syntaxt
// 2. Light weighted(occupy less memory)(class)

// ES6+ they have removed "function" keyword

// const add = function(a, b) {
//     return a + b;
// }

// this syntax will help in some looping methods

const add = (a, b) => a + b;

console.log(add(1, 2));

// with one parameter no need to write wrapper parameter brackets
const greet = name => "hello, " + name;

console.log(greet("Yagnesh"));
