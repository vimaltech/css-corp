

// Array Methods

// Popular Array Methods

// findIndex
// find
// filter
// some
// every

const users = [
    { id: 1, name: 'Yagnesh', gender: 'Male', age: 33},
    { id: 2, name: 'Virat', gender: 'Male', age: 30},
    { id: 3, name: 'Rohit', gender: 'Male', age: 28},
    { id: 7, name: 'Taimur', gender: 'Male', age: 08},
    { id: 4, name: 'Alia', gender: 'Female', age: 18},
    { id: 5, name: 'Dipeeka', gender: 'Female', age: 24},
    { id: 6, name: 'Priyanka', gender: 'Female', age: 38},
]


// -> Best case scenario O(logN)
// -> worst Case scenario O(N)

// If Record Found then it will return index of record
// else return -1
const index = users.findIndex(item => item.name === "Rohit")

console.log(index);

// -> Best case scenario O(logN)
// -> worst Case scenario O(N)

// If record found then it will return data
// else return undefined
const rohit = users.find(item => item.name === "shikhar")

console.log(rohit);

// O(N)
// It will return all the matching array of combinations 
// else return empty array
const maleUsers = users.filter(item => item.gender === 'Male' && item.age > 18);

console.log(maleUsers);

// O(N)
const isEveryoneAdult = users.every(item => item.age >= 18);

console.log(isEveryoneAdult);


// -> Best case scenario O(logN)
// -> worst Case scenario O(N)

const hasChildren = users.some(item => {
    console.log(item.name);
    return item.age < 18
});

const hasSeniorCitizen = users.some(item => {
        console.log(item.name);
    return item.age > 58
})

console.log(hasChildren);

console.log(hasSeniorCitizen);



// Big O notation

// binary search

// best case scenario -> sorted -> O(n/2)
// worst case scenario -> not sorted -> O(2n)

// O(1)

// O(n**2)


// 1. Find the user whoes name start with y

const yUser = users.find(item => item.name.slice(0, 1)  === 'Y');

console.log(yUser);

// 2. find the index who is male and age 32

// 3. check we have user age between 30 and 40