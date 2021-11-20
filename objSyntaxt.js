// Objects

const firstName = "Yagnesh";

const lastName = "Modh";

// ES6+ syntaxt for the object
const user = {
  firstName,
  lastName,
  degrees: ["b.tech", "diploma"],
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.degrees);
console.log(user.fullName());
console.log(user.firstName);
console.log(user.lastName);
