
// Set and Map

const arr2 = [...Array(1000).keys()];

console.time("some")
const is25Exist = arr2.indexOf(25);
console.timeEnd("some")


// primitive type data
// iterators
const set = new Set();

set.add({ a: 1});

// set.add()



const weakSet = new WeakSet();


// weakSet.add(obj);

// console.log(weakSet.has(obj));
// console.log(weakSet.delete(obj));
// console.log(weakSet.has(obj));


// for (const iterator of arr2) {
//     console.log(iterator);
// }



// set.add(1);
// set.add(2);
// set.add(3);
// set.add(2);

console.log(set.size);








const arr = [1,2,3,4,5];



const users = [
    { id: 1, name: 'Yagnesh', gender: 'Male', age: 33},
    { id: 2, name: 'Virat', gender: 'Male', age: 30},
    { id: 3, name: 'Rohit', gender: 'Male', age: 28},
    { id: 7, name: 'Taimur', gender: 'Male', age: 08},
    { id: 4, name: 'Alia', gender: 'Female', age: 18},
    { id: 5, name: 'Dipeeka', gender: 'Female', age: 24},
    { id: 6, name: 'Priyanka', gender: 'Female', age: 38},
    { id: 7, name: 'Amitabh', gender: 'Male', age: 65},
    { id: 8, name: 'Rekha', gender: 'Female', age: 72},
];

const groupByAge = users.reduce((p, c) => {
    const ageGroup = Math.floor(c.age/10);
    const key = `${ageGroup}0-${ageGroup}9`;
    (p[key] = p[key] || []).push(c) 
    return p;
}, {})

console.log(groupByAge);

const age = 29

const key = Math.floor(age/10);

console.log(key);


// {
//     "00-09": [],
//     "10-19": [],
//     "20-29": [],
//     "30-39": [],
//     "60-60": []
// }

const a = undefined;

const b = 2;

const c = a && b;

console.log(c);




// const c = a ?? b;
// const d = a || b;

// console.log(c);
// console.log(d);



// const data = a ? "a is available" : "a is not available";

// console.log(data);

// const b = 1;







// const val = false;

// console.log(!val);





const groupByGender = users.reduce((p, c) => {
    (p[c.gender] = p[c.gender] || []).push(c) 
    return p;
}, {})

console.log(groupByGender);


// const obj = {
//     a: 1,
//     b: 2
// }

// console.log(obj['c']);

// obj['c'] = [];

// console.log(obj['c']);

// {
//     Male: [],
//     Female: []
// }

// {

// }


// const rohitInfo1 = users.reduce((p, c) => {
//     if(c.name === "Rohit") {
//         return c;
//     }
//     return p;
// }, undefined);

// console.log(rohitInfo1);



// const rohitInfo = users.find(x => x.name === "Yag");

// console.log(rohitInfo);



// const maleUsers = users.filter(x => x.gender === 'Male');

// console.log(maleUsers);


// O(N)
// const maleUsers1 = users.reduce((p, c) => {
//     if(c.gender === "Male") {
//         return [...p, c];
//     }
//     return p;
// }, [])

// console.log(maleUsers1);

// const index = users.findIndex(x => x.name === "asdf");

// console.log(index);

// const index1 = users.reduce((p, c, index) => {
//     console.log(p);
//     if(c.name === "Rohit") {
//         return index
//     }
//     return p;
// }, -1)

// console.log(index1);

// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
// }


// findIndex
// find
// filter
// some
// every


// console.log(result);

// previous = Output of my previous iteration
// const sum = arr.reduce((p, c) => {
//     return p + c
// }, 0);

// console.log(sum);

