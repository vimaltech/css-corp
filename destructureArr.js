const arr = [1,2,3,4,5];

const arr1 = arr.slice(2,arr.length);

console.log(arr1);

const [, ...rest] = arr;


console.log(rest);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);