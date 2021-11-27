// map

// reduce

const users = [
    { id: 1, name: 'Yagnesh', gender: 'Male', age: 33},
    { id: 2, name: 'Virat', gender: 'Male', age: 30},
    { id: 3, name: 'Rohit', gender: 'Male', age: 28},
    { id: 7, name: 'Taimur', gender: 'Male', age: 08},
    { id: 4, name: 'Alia', gender: 'Female', age: 18},
    { id: 5, name: 'Dipeeka', gender: 'Female', age: 24},
    { id: 6, name: 'Priyanka', gender: 'Female', age: 38},
]

// Add new property 
// if user is male add profession: 'cricketer'

// if user is female add profession:'actor' 

// O(logN)
const index = users.findIndex(x => x.name === "Rohit");


const updatedUsers = [
    ...users.slice(0, index),
    { id: 8, name: 'Hardik', gender: 'Male', age: 26},
    ...users.slice(index)
]

console.log(users[index]);

console.time("findIndex")
const index1 = users.findIndex(x => x.name === "Rohit");
const updatedUsers1 = [
    ...users.slice(0, index),
    {...users[index], age: 32, profession: 'Cricketer'},
    ...users.slice(index + 1)
]
console.timeEnd("findIndex")

// O(N)
console.time("map")
const updatedUserMap = users.map(x => {
    if(x.name === "Rohit") {
       return {...x, age: 32} 
    }
    return x;
});
console.timeEnd("map")

console.log("updatedUserMap", updatedUserMap);

const updatedUsers2 = [
    ...users.slice(0, index),
    ...users.slice(index + 1)
]

const updatedUserFilter = users.filter(x => x.name !== "Rohit")
console.log(updatedUserFilter);


console.log(updatedUsers2);




// const arr = [1,2,3,4,5];

// const newArr = arr.map(item => {
//     if(item % 2 === 0) {
//         return item * 2;
//     }
//     return item;
// });

// console.log(newArr);