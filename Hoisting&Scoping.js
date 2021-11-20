// HOISTING

// // user 1
// var a = 1;

// // user 2
// var a = 5;

// // user 1 output is wrong
// console.log(a);

// var a = 1;

// Javascript Interpretation

// var a;

// a = 1;

// var a = 1;

// var a = 5;

// var a;

// a = 1;

// a = 5;

// console.log(a);

// console.log(a);

// var a = 1;

// console.log(b);

// var a = 1;

// Scoping
// IIFE(Intermediate Invoke Function Expression)
// Self calling function

// IIFE / Self calling function

// user1

// only one self calling function per file
(function () {
  var a = 1;
})();

// user1

// (function(){
//     var a = 5;
// })

// function add() {
//     console.log('hello');
// }

// add()

// Poits

// 1. Because of hoisting javascript allow redeclaration
// 2. scoping is not working with ES5
// 3. ES5 Scoping will work only in functions
