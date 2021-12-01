// Promise

// Pending

// resolved

// reject

// ajax -> promise

// fetch

const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("token")
        }, 1000)
    })
};

const users = (token) => {
    return new Promise((resolve, reject) => {
        if(!token) {
            reject("token is not available")
        }
        setTimeout(() => {
            // reject("rejected")
            resolve("all users")
        }, 3000)
        
    })
}

const usersHK = (token) => {
    return new Promise((resolve, reject) => {
        if(!token) {
            reject("token is not available")
        }
        setTimeout(() => {
            resolve("all users from hong kong")
        }, 2000)
        
    })
}



const add = (a, b) => a + b;

const products = (token) => {
    return new Promise((resolve, reject) => {
        if(!token) {
            reject("token not available")
        }
        setTimeout(() => {
            resolve("products info")
        }, 2000)
        
    })
}

const loadData = async () => {
    try {
        console.time("async process")
        const loginRes = await login();

        
        const userRes = await Promise.any([
            users(),
            usersHK()
        ]);

        console.log(userRes);


        // const res = await Promise.allSettled([
        //     users(loginRes),
        //     products()
        // ])
        // console.log(res);

        // Promise All Output
        // [ 'all users', 'products info' ]
        // [ { status: 'fulfilled', value: 'all users' }, { status: 'rejected', reason: 'token not available' } ]
        
        console.log(loginRes);
        // console.log(userRes);
        // console.log(productsRes);
        console.timeEnd("async process")
    } catch (error) {
        console.log(error);
    }
}

loadData();


// old javascript
// login()
// .then((val) => {
//     console.log(val);
//     users(val)
//     .then((val1) => {
//         console.log(val1);
//         getAllUserData(val1)
//         .then(() => {
//             console.log();
//         })
//         .catch(() => {

//         })
//     })
//     .catch(err => {
//         console.log(err);
//     })
// })
// .catch(() => {

// })



console.log("s1");

let isPending = true;

// p1()
// .then((val) => {
//     console.log(val);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     isPending = false;
//     console.log(isPending);
// })



console.log("s2");