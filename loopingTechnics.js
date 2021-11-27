// For -> 1
// while
// do while
// Foreach -> 2 -> Slowest -> never use this

const arr = [...Array(1000000).keys()];

console.time("for")
for (let i = 0; i < arr.length; i++) {
}
console.timeEnd("for")


console.time("while")
let j =  0;
while (j < arr.length) {
    j++
}
console.timeEnd("while")

console.time("doWhile")
let k = 0
do {
    k++;
} while (k < arr.length);
console.timeEnd("doWhile")

console.time("forEach")
arr.forEach(function(data) {
    
});
console.timeEnd("forEach")