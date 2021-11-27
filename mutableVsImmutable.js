

// const arr = [...Array(10000).keys()];

// const arr1 = [...Array(1000).keys()];

// console.time("for")
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
    
// }
// console.timeEnd("for")

// console.time('merge')
// const arr2 = [...arr, ...arr1];
// console.timeEnd('merge')



// To Achieve CRUD Operation 

// 1. Mutable Approach
// 2. Immutable Approach

const obj = {
    a: 1, 
    b: 2,
    a: 4
}

// Update Operation 

// Mutable Approach
obj.a = 3;

console.log(obj);

// Drawback  of mutable approch
// Someone want to use original object then cant use.
// performance is not good as compare to immutable approach

// Immutable Approach

// Occupy more memory
// More performate then mutable approach
const newObj = Object.assign({}, obj, { a: 3})


// { b: 2, a: 3}
console.log(obj);

console.log(newObj);

