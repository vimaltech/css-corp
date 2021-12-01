// possiblity breaks entire code
// cant reuse code

// const calc = (a, b, operator) => {
//     if(operator === '/') {
//         return a - b;
//     }
//     if(operator === '+') {
//         return a + b;
//     }
//     if(operator === '-') {
//         return a - b;
//     }
//     return 0;
// }

// clousers

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;


// (1 + 2) * (5 + 3)

// 
const calc = (a, b) => {
    return (operator1) => {
        const resul1 = operator1(a, b);
        return (x, y) => {
            const resul2 = operator1(x, y);
            return (operator2) => {
                return operator2(resul1, resul2)
            }
        }
    }
}

console.log(add(5,2));

console.log(calc(1,2)(add)(5, 3)(mul));
console.log(calc(1,2)(sub)(5, 3)(mul));
console.log(calc(1,2)(mul)(5, 3)(mul));

// console.log(calc(1,2, '+'))
// console.log(calc(1,2, '-'))