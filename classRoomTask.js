
const user = {
    id: 1,
    name: 'Yagnesh',
    age: 30
}

// add new property gender
const updatedUser1 = {gender: 'male', ...user}
console.log(updatedUser1);

// change age
const updatedUser2 = {...user, age: 33};
console.log(updatedUser2);

// delete id
const {id, ...rest} = user;
console.log(rest);
