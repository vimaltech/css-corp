const arr = [1,2,3,4,5];

// Immutable

// const arr1 = arr.slice(0, 2);

// console.log(arr1);

// const arr2 = arr.slice(2);

// console.log(arr2);

// add data at possition
const arr1 = [
    ...arr.slice(0, 2),
     6,
    ...arr.slice(2)
];

// update data at possition
const arr2 = [
    ...arr.slice(0, 2),
     6,
    ...arr.slice(2 + 1)
];

// delete data at possition
const arr3 = [
    ...arr.slice(0, 2),
    ...arr.slice(2 + 1)
];

console.log(arr3);



const newArr = [...arr, 6]

console.log(newArr);

const newArr1 = [0, ...arr];

console.log(newArr1);

console.log(arr);



// // Mutable

// // LILO
// arr.push(6);

// console.log(arr);

// arr.pop();

// console.log(arr);

// // FIFO

// arr.unshift(0);

// console.log(arr);

// arr.shift();

// console.log(arr);

// Mutable
// arr.splice(2, 1, 6);

// console.log(arr);