// use destructuring approch in function

// const add = (a, b, c) => {
//     return a + b + c;
// }

const add = ( a, b, ...data) => {
    console.log(a);
    console.log(b);
    console.log(data);
    let result = 0
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        result = result + element;
    }
    return result
}

console.log(add(1, 2,3,4,5,6,7));