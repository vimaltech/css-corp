// Hoisting also works with functions
// Entire function will be hoist
// b

// named function
// function add(a, b) {
//     return a + b;
// }

// anonimous function
const add = function (a, b) {
  return a + b;
};

// var add = function() {
//     return 'Hacked...'
// }

console.log(add(1, 2));
