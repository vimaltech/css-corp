function* abc() {
    yield 5;
    yield 6;
}

const gen1 = abc();

function* xyz() {
  try {
      
    yield 1;
    yield gen1;
    
// writen code to handle login
    yield 2;
    yield 3;
    yield 4;
    return "hello";

// writen code to handle logout
    
  } catch (error) {
    console.log(error);
  }
}

const logout = () => {

}

const login = () => {

}

const gen = xyz();

for (const iterator of gen) {
    console.log(iterator);
}

// console.log(gen.next());
// gen.return();
// gen.throw()
// console.log(gen.next());
// gen.return()

// console.log(gen.next());
// gen.throw(new Error("error"))

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// const abc = async() => {
//     await
// }


// Login API

// Logout API