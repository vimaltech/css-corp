const users = [
    { id: 1, name: 'Yagnesh', gender: 'Male', age: 33},
    { id: 2, name: 'Virat', gender: 'Male', age: 30},
    { id: 3, name: 'Rohit', gender: 'Male', age: 28},
    { id: 7, name: 'Taimur', gender: 'Male', age: 08},
    { id: 4, name: 'Alia', gender: 'Female', age: 18},
    { id: 5, name: 'Dipeeka', gender: 'Female', age: 24},
    { id: 6, name: 'Priyanka', gender: 'Female', age: 38},
]

const yUser = users.find(item => item.name.match(/^Y/));

const male32 = users.findIndex(item => item.gender === 'Male' && item.age === 32);

console.log(male32);

// O(N)

// O(logN) 
const hasBW3040  = users.some(item => item.age >= 30 && item.age <= 40);

console.log(hasBW3040);


console.log(yUser);