console.log(` %c
=======================================
100: Primitives vs Objects in Practice
=======================================
`, 'color:red;font-size:20px;')

// Section has stuff from the tutorial

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Testing wiht objects 

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);