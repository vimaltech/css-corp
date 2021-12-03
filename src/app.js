export const a = 'Hello from app.js';

export const b = 'i am from app.js';

export const c = ' i am c from app.js';

export const d = a ?? b;

export const obj = {
  a: 1,
  b: 2,
  c() {
    console.log('Obj', this);
  },
};

export const obj1 = {
  a: 1,
  b: 2,
  c: () => {
    console.log('obj1', this);
  },
};

// per file only export default allowed
export default {
  a, b, c, obj, obj1,
};
