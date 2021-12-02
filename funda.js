const obj1 = {
    a: 5
}

const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            f: obj1,
        }
    }
}


obj.c.e.h = { a: 1 }

console.log(obj.c.e.h.a);

// ?? | ||

