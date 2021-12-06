// const dog = {
//     name: "Scropy",
//     makeSound: "Bow Wow",
//     haLegs: () => {
//         return true
//     },
//     canFly: () => {
//         return false
//     }
// }

// console.log(dog.name);

// const cat = {
//     name: "Mini",
//     MakeSound: "Meow",
//     hasLegs: () => {
//         return true
//     },
//     canFly: () => false
// }

class Animal {
  // Special Method call only once when create instance
  constructor(name = '') {
    console.log(name);
    this.name = name;
  }

  set name(value) {
    this._name = `${value[0].toUpperCase()}${value.slice(1)}`;
  }

  get name() {
    return this._name;
  }

  makeSound() {
    if (this.name === 'Scorpy') {
      return 'Bow wow';
    }
    if (this.name === 'Mini') {
      return 'Meow';
    }
    return 'No Sound';
  }

  hasLegs() {
    if (this.name === 'Scorpy' || this.name === 'Mini') {
      return true;
    }
    return false;
  }

  canFly() {
    console.log(this.#changeAnimalName('hell'));
    if (this.name === 'Scorpy' || this.name === 'Mini') {
      return false;
    }
    return true;
  }

  #changeAnimalName(newName) {
    console.log('is Method called');
    this.name = newName;
  }
}

class Dog extends Animal {
  constructor() {
    super('Scorpy');
  }

  isObidiand() {
    return true;
  }

  makeSound() {
    const parentsSound = super.makeSound();
    console.log(parentsSound);
    return 'booooow....woowwww';
  }
}

const dog = new Dog();
console.log(dog.isObidiand());
console.log(dog.makeSound());

console.log(dog.name);

const cat = new Animal('mini');
console.log(cat.name);
console.log(cat.canFly());
// console.log(cat.#changeAnimalName("meow"));
console.log(cat.name);

console.log(dog.name);
console.log(dog.makeSound());
console.log(dog.makeSound());
